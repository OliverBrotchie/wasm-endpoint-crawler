const url = "https://rolisz.ro/";
const rust = import("./pkg")
    .then(async (m) => console.log(await m.crawl(url)))
    .catch((e) => console.log(e));
