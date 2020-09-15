#![feature(async_closure)]
use futures::stream::{self, StreamExt};
use reqwest::Url;
use select::document::Document;
use select::predicate::Name;
use select::predicate::Predicate;
use std::collections::HashSet;
use std::path::Path;
use wasm_bindgen::prelude::*;

#[derive(Debug)]
enum Error {
    Fetch { url: String, e: reqwest::Error },
}

type Result<T> = std::result::Result<T, Error>;

impl<S: AsRef<str>> From<(S, reqwest::Error)> for Error {
    fn from((url, e): (S, reqwest::Error)) -> Self {
        Error::Fetch {
            url: url.as_ref().to_string(),
            e,
        }
    }
}

pub fn get_links_from_html(html: &str, origin: &str) -> HashSet<String> {
    let normalize_url = |url: &str| -> Option<String> {
        let new_url = Url::parse(url);

        match new_url {
            Ok(new_url) => {
                if let Some("str") = new_url.host_str() {
                    Some(url.to_string())
                } else {
                    None
                }
            }
            Err(_e) => {
                // Relative urls are not parsed by Reqwest
                if url.starts_with('/') {
                    Some(format!("{}{}", origin, url))
                } else {
                    None
                }
            }
        }
    };
    Document::from(html)
        .find(Name("a").or(Name("link")))
        .filter_map(|n| n.attr("href"))
        .filter(has_extension)
        .filter_map(normalize_url)
        .collect::<HashSet<String>>()
}

async fn fetch_url(url: &str) -> Result<String> {
    let res = reqwest::get(format!("https://cors-anywhere.herokuapp.com/{}", url).as_str())
        .await
        .map_err(|e| (url, e))?;
    let body = res.text().await.map_err(|e| (url, e))?;
    Ok(body)
}

fn has_extension(url: &&str) -> bool {
    Path::new(&url).extension().is_none()
}

pub async fn scrape_links(input: String) -> Vec<String> {
    let input = input.as_str();
    let body = fetch_url(input).await;

    if body.is_ok() {
        let mut visited = HashSet::new();
        visited.insert(input.to_string());
        let found_urls = get_links_from_html(&body.unwrap(), input);

        let mut new_urls = found_urls
            .difference(&visited)
            .map(|x| x.to_string())
            .collect::<HashSet<String>>();

        while !new_urls.is_empty() {
            let (_errors, found_urls): (Vec<_>, Vec<_>) = stream::iter(&new_urls)
                .then(|url| async move {
                    let body = fetch_url(&url).await?;
                    let links = get_links_from_html(&body, input);
                    Ok(links)
                })
                .collect::<Vec<Result<HashSet<String>>>>()
                .await
                .into_iter()
                .partition(|r| r.is_ok());

            visited.extend(new_urls);
            new_urls = found_urls
                .into_iter()
                .map(|r| r.unwrap())
                .flatten()
                .collect::<HashSet<String>>()
                .difference(&visited)
                .map(|x| x.to_string())
                .collect::<HashSet<String>>();
        }
        visited.into_iter().collect::<Vec<String>>()
    } else {
        vec!["Err".to_string()]
    }
}

#[wasm_bindgen]
pub async fn crawl(input: String) -> JsValue {
    JsValue::from_serde(&scrape_links(input).await).unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn run_scrape() {
        let result: Vec<String> = scrape_links("https://rolisz.ro/".to_string()).await;

        assert!(result != vec!["Err".to_string()] && result.len() >= 1);
    }
}
