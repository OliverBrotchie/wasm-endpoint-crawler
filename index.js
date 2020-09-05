const rust = import('./pkg');
const url = 'https://rolisz.ro/';
rust.then(async (m) => console.log(await m.crawl(url))).catch((e) => console.log(e));
