// Above-mentioned will work or use this simple form
require.config({
    paths: {
        'crypto-js': 'path-to/bower_components/crypto-js/crypto-js'
    }
});

require(["crypto-js"], function (CryptoJS) {
    console.log(CryptoJS.HmacSHA1("Message", "Key"));
});
