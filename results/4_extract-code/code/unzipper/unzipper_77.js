var il = require('iconv-lite');
fs.createReadStream('path/to/archive.zip')
  .pipe(unzipper.Parse())
  .on('entry', function (entry) {
    // if some legacy zip tool follow ZIP spec then this flag will be set
    var isUnicode = entry.props.flags.isUnicode;
    // decode "non-unicode" filename from OEM Cyrillic character set
    var fileName = isUnicode ? entry.path : il.decode(entry.props.pathBuffer, 'cp866');
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (fileName === "Текстовый файл.txt") {
      entry.pipe(fs.createWriteStream(fileName));
    } else {
      entry.autodrain();
    }
  });
