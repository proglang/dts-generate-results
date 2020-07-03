const si = require('systeminformation');

setInterval(function() {
	si.networkStats().then(data => {
	    console.log(data);
	})
}, 1000)
