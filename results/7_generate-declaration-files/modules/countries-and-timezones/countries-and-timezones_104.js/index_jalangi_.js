J$.iids = {"9":[1,10,1,17],"17":[1,18,1,43],"25":[1,10,1,44],"33":[1,10,1,44],"41":[1,10,1,44],"49":[3,19,3,21],"57":[3,45,3,49],"65":[3,19,3,50],"67":[3,19,3,44],"73":[3,19,3,50],"81":[3,19,3,50],"89":[4,1,4,8],"97":[4,13,4,24],"105":[4,1,4,25],"107":[4,1,4,12],"113":[4,1,4,26],"121":[1,1,27,1],"129":[1,1,27,1],"137":[1,1,27,1],"145":[1,1,27,1],"153":[1,1,27,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ct = require('countries-and-timezones');\n\nvar mxTimezones = ct.getTimezonesForCountry('MX');\nconsole.log(mxTimezones);\n\n/*\nPrints:\n\n[ { name: 'America/Mexico_City',\n    utcOffset: -360,\n    offsetStr: '-06:00',\n    countries: [ 'MX' ] },\n  { name: 'America/Cancun',\n    utcOffset: -300,\n    offsetStr: '-05:00',\n    countries: [ 'MX' ] },\n  { name: 'America/Merida',\n    utcOffset: -360,\n    offsetStr: '-06:00',\n    countries: [ 'MX' ] },\n  { name: 'America/Monterrey',\n\n...\n\n*/\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'ct', ct, 0);
            J$.N(137, 'mxTimezones', mxTimezones, 0);
            var ct = J$.X1(41, J$.W(33, 'ct', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'countries-and-timezones', 21, false)), ct, 3));
            var mxTimezones = J$.X1(81, J$.W(73, 'mxTimezones', J$.M(65, J$.R(49, 'ct', ct, 1), 'getTimezonesForCountry', 0)(J$.T(57, 'MX', 21, false)), mxTimezones, 3));
            J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.R(97, 'mxTimezones', mxTimezones, 1)));
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
