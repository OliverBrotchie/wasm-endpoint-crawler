import { get_links_from_html } from '../pkg/endpoint_crawler.js';

let url = 'https://rolisz.ro/';

fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        console.log(get_links_from_html(html, 'https://rolisz.ro/'));
    });
