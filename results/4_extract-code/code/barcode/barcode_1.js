var barcode = require('barcode');
var code39 = barcode('code39', {
	data: "it works",
	width: 400,
	height: 100,
});
