J$.iids = {"9":[1,10,1,17],"17":[1,18,1,43],"25":[1,10,1,44],"33":[1,10,1,44],"41":[1,10,1,44],"49":[3,18,3,20],"57":[3,45,3,63],"65":[3,18,3,64],"67":[3,18,3,44],"73":[3,18,3,64],"81":[3,18,3,64],"89":[4,1,4,8],"97":[4,13,4,23],"105":[4,1,4,24],"107":[4,1,4,12],"113":[4,1,4,25],"121":[1,1,26,1],"129":[1,1,26,1],"137":[1,1,26,1],"145":[1,1,26,1],"153":[1,1,26,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ct = require('countries-and-timezones');\n\nvar nyTimezone = ct.getCountriesForTimezone('America/New_York');\nconsole.log(nyTimezone);\n\n/*\nPrints:\n\n[ { id: 'US',\n    name: 'United States',\n    timezones: \n     [ 'America/New_York',\n       'America/Detroit',\n       'America/Kentucky/Louisville',\n       'America/Kentucky/Monticello',\n       'America/Indiana/Indianapolis',\n       'America/Indiana/Vincennes',\n       'America/Indiana/Winamac',\n       'America/Indiana/Marengo',\n       'America/Indiana/Petersburg',\n\n...\n\n*/\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(129, 'ct', ct, 0);
            J$.N(137, 'nyTimezone', nyTimezone, 0);
            var ct = J$.X1(41, J$.W(33, 'ct', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'countries-and-timezones', 21, false)), ct, 3));
            var nyTimezone = J$.X1(81, J$.W(73, 'nyTimezone', J$.M(65, J$.R(49, 'ct', ct, 1), 'getCountriesForTimezone', 0)(J$.T(57, 'America/New_York', 21, false)), nyTimezone, 3));
            J$.X1(113, J$.M(105, J$.R(89, 'console', console, 2), 'log', 0)(J$.R(97, 'nyTimezone', nyTimezone, 1)));
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
