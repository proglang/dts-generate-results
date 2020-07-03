  var QRCode = require('qrcode')
  var toSJIS = require('qrcode/helper/to-sjis')

  QRCode.toDataURL(kanjiString, { toSJISFunc: toSJIS }, function (err, url) {
    console.log(url)
  })
