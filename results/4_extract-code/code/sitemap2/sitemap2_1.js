var fs = require('fs');
var Sitemap = require('sitemap2');

var host = 'http://vk.com';

var sm = new Sitemap({hostName: host});

var movies = new Sitemap({hostName: host});
movies.addUrl('http://vk.com/movies/video-1');
movies.addUrl('http://vk.com/movies/video-n');

var books = new Sitemap({hostName: host});
books.addUrl('http://vk.com/books/book-1');
books.addUrl('http://vk.com/books/book-n');

sm.addSitemap(movies);
sm.addSitemap(books);

var files = sm.toXML();

files.forEach(function saveFileToDisk(file) {
    fs.writeFileSync(file.fileName, file.xml);
});

