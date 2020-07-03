J$.iids = {"9":[1,25,1,32],"17":[1,33,1,53],"25":[1,25,1,54],"33":[1,25,1,54],"41":[1,25,1,54],"49":[3,1,3,18],"57":[3,26,3,33],"65":[3,45,3,52],"73":[3,35,3,54],"81":[3,1,3,55],"83":[3,1,3,25],"89":[3,1,3,56],"97":[6,1,6,18],"105":[6,26,6,33],"113":[6,45,6,52],"121":[6,35,6,54],"129":[6,1,6,55],"131":[6,1,6,25],"137":[6,1,6,56],"145":[9,1,9,18],"153":[9,26,9,33],"161":[9,45,9,49],"169":[9,35,9,51],"177":[9,1,9,52],"179":[9,1,9,25],"185":[9,1,9,53],"193":[12,1,12,18],"201":[12,26,12,33],"209":[12,45,12,52],"217":[12,35,12,54],"225":[12,1,12,55],"227":[12,1,12,25],"233":[12,1,12,56],"241":[15,1,15,18],"249":[15,26,15,33],"257":[15,45,15,52],"265":[15,35,15,54],"273":[15,1,15,55],"275":[15,1,15,25],"281":[15,1,15,56],"289":[1,1,17,1],"297":[1,1,17,1],"305":[1,1,17,1],"313":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var currencyFormatter = require('currency-formatter');\n\ncurrencyFormatter.format(1000000, { locale: 'en-US' });\n// => '$1,000,000.00'\n\ncurrencyFormatter.format(1000000, { locale: 'en-GB' });\n// => '£1,000,000.00'\n\ncurrencyFormatter.format(1000000, { locale: 'GB' });\n// => '£1,000,000.00'\n\ncurrencyFormatter.format(1000000, { locale: 'de-DE' });\n// => '1.000.000,00 €'\n\ncurrencyFormatter.format(1000000, { locale: 'nl-NL' });\n// => '€1.000.000,00'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(289, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(297, 'currencyFormatter', currencyFormatter, 0);
            var currencyFormatter = J$.X1(41, J$.W(33, 'currencyFormatter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'currency-formatter', 21, false)), currencyFormatter, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(57, 1000000, 22, false), J$.T(73, {
                locale: J$.T(65, 'en-US', 21, false)
            }, 11, false)));
            J$.X1(137, J$.M(129, J$.R(97, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(105, 1000000, 22, false), J$.T(121, {
                locale: J$.T(113, 'en-GB', 21, false)
            }, 11, false)));
            J$.X1(185, J$.M(177, J$.R(145, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(153, 1000000, 22, false), J$.T(169, {
                locale: J$.T(161, 'GB', 21, false)
            }, 11, false)));
            J$.X1(233, J$.M(225, J$.R(193, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(201, 1000000, 22, false), J$.T(217, {
                locale: J$.T(209, 'de-DE', 21, false)
            }, 11, false)));
            J$.X1(281, J$.M(273, J$.R(241, 'currencyFormatter', currencyFormatter, 1), 'format', 0)(J$.T(249, 1000000, 22, false), J$.T(265, {
                locale: J$.T(257, 'nl-NL', 21, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
