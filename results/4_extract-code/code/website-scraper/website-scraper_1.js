const scrape = require('website-scraper');
const options = {
  urls: ['http://nodejs.org/'],
  directory: '/path/to/save/',
};

// with async/await
const result = await scrape(options);

// with promise
scrape(options).then((result) => {});

// or with callback
scrape(options, (error, result) => {});
