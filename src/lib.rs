use itertools::Itertools;
use reqwest::Url;
use select::document::Document;
use select::predicate::Name;
use select::predicate::Predicate;
use serde::{Deserialize, Serialize};
use std::path::Path;
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize)]
struct Output {
    urls: Vec<String>,
}

#[wasm_bindgen]
pub fn get_links_from_html(html: &str, origin: &str) -> JsValue {
    let normalize_url = |url: &str| -> Option<String> {
        let new_url = Url::parse(url);

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
                    Some(format!("{}{}", origin, url))
                } else {
                    None
                }
            }
        }
    };

    JsValue::from_serde(&Output {
        urls: Document::from(html)
            .find(Name("a").or(Name("link")))
            .filter_map(|n| n.attr("href"))
            .filter(has_extension)
            .filter_map(normalize_url)
            .unique()
            .collect::<Vec<String>>(),
    })
    .unwrap()
}

fn has_extension(url: &&str) -> bool {
    Path::new(&url).extension().is_none()
}
