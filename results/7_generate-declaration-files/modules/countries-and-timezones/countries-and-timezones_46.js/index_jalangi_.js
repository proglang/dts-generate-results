J$.iids = {"9":[1,10,1,17],"17":[1,18,1,43],"25":[1,10,1,44],"33":[1,10,1,44],"41":[1,10,1,44],"49":[3,17,3,19],"57":[3,17,3,37],"59":[3,17,3,35],"65":[3,17,3,37],"73":[3,17,3,37],"81":[4,1,4,8],"89":[4,13,4,22],"97":[4,1,4,23],"99":[4,1,4,12],"105":[4,1,4,24],"113":[1,1,27,1],"121":[1,1,27,1],"129":[1,1,27,1],"137":[1,1,27,1],"145":[1,1,27,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ct = require('countries-and-timezones');\n\nvar countries = ct.getAllCountries();\nconsole.log(countries);\n\n/*\nPrints:\n\n{ AD: { id: 'AD', name: 'Andorra', timezones: [ 'Europe/Andorra' ] },\n  AE: \n   { id: 'AE',\n     name: 'United Arab Emirates',\n     timezones: [ 'Asia/Dubai' ] },\n  AF: { id: 'AF', name: 'Afghanistan', timezones: [ 'Asia/Kabul' ] },\n  AG: \n   { id: 'AG',\n     name: 'Antigua & Barbuda',\n     timezones: [ 'America/Port_of_Spain' ] },\n  AI: \n   { id: 'AI',\n     name: 'Anguilla',\n     timezones: [ 'America/Port_of_Spain' ] },\n\n...\n\n*/\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'ct', ct, 0);
            J$.N(129, 'countries', countries, 0);
            var ct = J$.X1(41, J$.W(33, 'ct', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'countries-and-timezones', 21, false)), ct, 3));
            var countries = J$.X1(73, J$.W(65, 'countries', J$.M(57, J$.R(49, 'ct', ct, 1), 'getAllCountries', 0)(), countries, 3));
            J$.X1(105, J$.M(97, J$.R(81, 'console', console, 2), 'log', 0)(J$.R(89, 'countries', countries, 1)));
        } catch (J$e) {
            J$.Ex(137, J$e);
        } finally {
            if (J$.Sr(145)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
