const express = require('express')
const expressSitemapXml = require('express-sitemap-xml')

const app = express()

app.use(expressSitemapXml(getUrls, 'https://bitmidi.com'))

async function getUrls () {
  return await getUrlsFromDatabase()
}
