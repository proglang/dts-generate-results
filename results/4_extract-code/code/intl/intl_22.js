function runMyApp() {
    var nf = new Intl.NumberFormat(undefined, {style:'currency', currency:'GBP'});
    document.getElementById('price').textContent = nf.format(100);
}
if (!global.Intl) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js'
    ], function (require) {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        runMyApp()
    });
} else {
    runMyApp()
}
