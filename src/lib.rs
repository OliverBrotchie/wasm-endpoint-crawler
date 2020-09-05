#![feature(async_closure)]
use futures::stream::{self, StreamExt};
use rayon::prelude::*;
use reqwest::Url;
use select::document::Document;
use select::predicate::Name;
use select::predicate::Predicate;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use std::path::Path;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures;

#[derive(Serialize, Deserialize, Debug)]
struct Output {
    urls: Vec<String>,
}

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

fn get_links_from_html(html: &str, origin: &str) -> HashSet<String> {
    let normalize_url = |url: &str| -> Option<String> {
        let new_url = Url::parse(url);
        let temp = origin;

        // let origin_url = &origin[origin.find("://").unwrap() + 3
        //     ..if origin[origin.find("://").unwrap() + 3..].contains("/") {
        //         origin.find("/").unwrap() - 1
        //     } else {
        //         origin.len()
        //     }];

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
                    Some(format!("{}{}", temp, url))
                } else {
                    None
                }
            }
        }
    };
    return Document::from(html)
        .find(Name("a").or(Name("link")))
        .filter_map(|n| n.attr("href"))
        .filter(has_extension)
        .filter_map(normalize_url)
        .collect::<HashSet<String>>();
}

async fn fetch_url(url: &str) -> Result<String> {
    let client = reqwest::Client::new();
    let res = client
        .get(url)
        .fetch_mode_no_cors()
        .send()
        .await
        .map_err(|e| (url, e))?;
    let body = res.text().await.map_err(|e| (url, e))?;
    Ok(body)
}

fn has_extension(url: &&str) -> bool {
    Path::new(&url).extension().is_none()
}

#[wasm_bindgen] //error occuring here
pub async fn crawl(input: String) -> JsValue {
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
                .into_par_iter()
                .map(|r| r.unwrap())
                .reduce(HashSet::new, |mut acc, x| {
                    acc.extend(x);
                    acc
                })
                .difference(&visited)
                .map(|x| x.to_string())
                .collect::<HashSet<String>>();
        }
        let urls: Vec<_> = visited.into_iter().collect();
        let output = Output { urls };

        JsValue::from_serde(&output).unwrap()
    } else {
        let urls: Vec<String> = vec!["Err".to_string()];
        let output = Output { urls };

        JsValue::from_serde(&output).unwrap()
    }
}
