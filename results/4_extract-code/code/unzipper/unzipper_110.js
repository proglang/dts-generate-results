var request = require('request');
var unzipper = require('./unzip');

async function main() {
  const directory = await unzipper.Open.url(request,'http://www2.census.gov/geo/tiger/TIGER2015/ZCTA5/tl_2015_us_zcta510.zip');
  const file = directory.files.find(d => d.path === 'tl_2015_us_zcta510.shp.iso.xml');
  const content = await file.buffer();
  console.log(content.toString());
}

main();
