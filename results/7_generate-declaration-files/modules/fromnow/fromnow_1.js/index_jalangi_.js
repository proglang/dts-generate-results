J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[3,1,3,8],"57":[3,9,3,21],"65":[3,1,3,22],"73":[3,1,3,23],"81":[6,1,6,8],"89":[6,9,6,21],"97":[6,1,6,22],"105":[6,1,6,23],"113":[9,1,9,8],"121":[9,9,9,30],"129":[9,1,9,31],"137":[9,1,9,32],"145":[12,1,12,8],"153":[12,9,12,40],"161":[12,1,12,41],"169":[12,1,12,42],"177":[1,1,14,1],"185":[1,1,14,1],"193":[1,1,14,1],"201":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var fromNow = require('fromnow');\n\nfromNow('12/31/2010');\n//=> \"4 years, 10 months, 8 days, 10 hours, 15 minutes\"\n\nfromNow('2030-05-20');\n//=> \"14 years, 6 months, 21 days, 5 hours, 43 minutes\"\n\nfromNow('2030-05-20 14:02:47');\n//=> \"14 years, 6 months, 22 days, 2 hours, 44 minutes\"\n\nfromNow('Wed, 20 Nov 1912 00:00:00 GMT');\n//=> \"103 years, 23 days, 18 hours, 20 minutes\"\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'fromNow', fromNow, 0);
            var fromNow = J$.X1(41, J$.W(33, 'fromNow', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'fromnow', 21, false)), fromNow, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'fromNow', fromNow, 1), 0)(J$.T(57, '12/31/2010', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'fromNow', fromNow, 1), 0)(J$.T(89, '2030-05-20', 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'fromNow', fromNow, 1), 0)(J$.T(121, '2030-05-20 14:02:47', 21, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'fromNow', fromNow, 1), 0)(J$.T(153, 'Wed, 20 Nov 1912 00:00:00 GMT', 21, false)));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
