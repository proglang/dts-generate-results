var tcpp = require('tcp-ping');

tcpp.probe('46.28.246.123', 80, function(err, available) {
    console.log(available);
});

tcpp.ping({ address: '46.28.246.123' }, function(err, data) {
    console.log(data);
});
