mod lib;

use futures::stream::{self, StreamExt};
use lib::fetch_url;
use lib::get_links_from_html;
use lib::Result;

use rayon::prelude::*;
use std::collections::HashSet;

#[tokio::main]
async fn main() {
    let result: Vec<String> = crawl("https://rolisz.ro/".to_string()).await;

    println!("{:?}", result);
}

pub async fn crawl(input: String) -> Vec<String> {
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
        visited.into_iter().collect::<Vec<String>>()
    } else {
        vec!["Err".to_string()]
    }
}
