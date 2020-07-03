var fs = require('fs');
im.resize({
  srcData: fs.readFileSync('kittens.jpg', 'binary'),
  width:   256
}, function(err, stdout, stderr){
  if (err) throw err
  fs.writeFileSync('kittens-resized.jpg', stdout, 'binary');
  console.log('resized kittens.jpg to fit within 256x256px')
});
