const { buildSitemaps } = require('express-sitemap-xml')

async function run () {
  const urls = ['/1', '/2', '/3']
  const sitemaps = await buildSitemaps(urls, 'https://bitmidi.com')

  console.log(Object.keys(sitemaps))
  // ['/sitemap.xml']

  console.log(sitemaps['/sitemap.xml'])
  // `<?xml version="1.0" encoding="utf-8"?>
  //  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //    <url>
  //      <loc>https://bitmidi.com/1</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //    <url>
  //      <loc>https://bitmidi.com/2</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //    <url>
  //      <loc>https://bitmidi.com/3</loc>
  //      <lastmod>${getTodayStr()}</lastmod>
  //    </url>
  //  </urlset>`
})
