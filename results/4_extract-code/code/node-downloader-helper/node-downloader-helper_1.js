const { DownloaderHelper } = require('node-downloader-helper');
const dl = new DownloaderHelper('http://ipv4.download.thinkbroadband.com/1GB.zip', __dirname);

dl.on('end', () => console.log('Download Completed'))
dl.start();
