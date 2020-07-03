J$.iids = {"9":[1,25,1,32],"17":[1,33,1,53],"25":[1,25,1,54],"33":[1,25,1,54],"41":[1,25,1,54],"49":[3,1,3,18],"57":[3,26,3,33],"65":[3,43,3,48],"73":[3,35,3,50],"81":[3,1,3,51],"83":[3,1,3,25],"89":[3,1,3,52],"97":[6,1,6,18],"105":[6,26,6,33],"113":[6,43,6,48],"121":[6,35,6,50],"129":[6,1,6,51],"131":[6,1,6,25],"137":[6,1,6,52],"145":[9,1,9,18],"153":[9,26,9,33],"161":[9,43,9,48],"169":[9,35,9,50],"177":[9,1,9,51],"179":[9,1,9,25],"185":[9,1,9,52],"193":[1,1,11,1],"201":[1,1,11,1],"209":[1,1,11,1],"217":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var currencyFormatter = require('currency-formatter');\n\ncurrencyFormatter.format(1000000, { code: 'USD' });\n// => '$1,000,000.00'\n\ncurrencyFormatter.format(1000000, { code: 'GBP' });\n// => '£1,000,000.00'\n\ncurrencyFormatter.format(1000000, { code: 'EUR' });\n// => '1 000 000,00 €'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'currencyFormatter', currencyFormatter, 0);
            var currencyFormatter = J$.X1(41, J$.W(33, 'currencyFormatter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'currency-formatter', 21, false)), currencyFormatter, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(57, 1000000, 22, false), J$.T(73, {
                code: J$.T(65, 'USD', 21, false)
            }, 11, false)));
            J$.X1(137, J$.M(129, J$.R(97, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(105, 1000000, 22, false), J$.T(121, {
                code: J$.T(113, 'GBP', 21, false)
            }, 11, false)));
            J$.X1(185, J$.M(177, J$.R(145, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(153, 1000000, 22, false), J$.T(169, {
                code: J$.T(161, 'EUR', 21, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
