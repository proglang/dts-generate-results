const request = require('snekfetch');

request.post('https://httpbin.org/post')
  .send({ usingGoodRequestLibrary: true })
  .then(r => console.log(r.body)); // r.body is object from json response

request.get('https://s.gc.gy/o-SNAKES.jpg')
  .then(r => fs.writeFile('download.jpg', r.body)); // r.body is buffer

request.get('https://s.gc.gy/o-SNAKES.jpg')
  .pipe(fs.createWriteStream('download.jpg')); // pipes
