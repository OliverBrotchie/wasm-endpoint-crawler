#![feature(async_closure)]

use rayon::prelude::*;
use reqwest::Url;
use select::document::Document;
use select::predicate::Name;
use select::predicate::Predicate;
use std::collections::HashSet;
use std::path::Path;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures;

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

        let origin_url = &origin[origin.find("://").unwrap() + 3
            ..if origin[origin.find("://").unwrap() + 3..].contains("/") {
                origin.find("/").unwrap() - 1
            } else {
                origin.len()
            }];
        match new_url {
            Ok(new_url) => {
                if let Some(origin_url) = new_url.host_str() {
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
    let res = reqwest::get(url).await.map_err(|e| (url, e))?;
    let body = res.text().await.map_err(|e| (url, e))?;
    Ok(body)
}

fn has_extension(url: &&str) -> bool {
    Path::new(&url).extension().is_none()
}

#[wasm_bindgen]
pub async fn crawl(input: &str) -> String {
    let body = fetch_url(input).await.unwrap();

    let mut visited = HashSet::new();
    visited.insert(input.to_string());
    let found_urls = get_links_from_html(&body, input);

    let mut new_urls = found_urls
        .difference(&visited)
        .map(|x| x.to_string())
        .collect::<HashSet<String>>();

    while !new_urls.is_empty() {
        let (found_urls, errors): (Vec<Result<HashSet<String>>>, Vec<_>) = new_urls
            .par_iter()
            .map(async move |url| -> Result<HashSet<String>> {
                let body = fetch_url(url).await.unwrap();
                let links = get_links_from_html(&body, input);
                Ok(links)
            })
            .partition(Result::is_ok);

        visited.extend(new_urls);
        new_urls = found_urls
            .into_par_iter()
            .map(Result::unwrap)
            .reduce(HashSet::new, |mut acc, x| {
                acc.extend(x);
                acc
            })
            .difference(&visited)
            .map(|x| x.to_string())
            .collect::<HashSet<String>>();
    }
    println!("{:?}", visited);
    let output: Vec<_> = visited.into_iter().collect();

    return output.join(",");
}
