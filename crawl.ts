// @deno-types="./pkg/endpoint_crawler.d.ts"
import { crawl } from "./pkg/endpoint_crawler.js";

let url = "https://rolisz.ro/";

// fetch(url).then(function (response) {
//   return response.text();
// }).then(function (html) {
//   console.log(get_links_from_html(html, "https://rolisz.ro/"));
// }).catch(function (err) {
//   // There was an error
//   console.warn("Something went wrong.", err);
// });

console.log(crawl(url));
