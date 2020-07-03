J$.iids = {"9":[1,11,1,18],"17":[1,19,1,38],"25":[1,11,1,39],"33":[3,16,3,20],"41":[3,12,3,22],"49":[3,12,3,36],"51":[3,12,3,34],"57":[3,12,3,36],"65":[3,5,3,36],"73":[2,11,4,4],"81":[2,11,4,4],"89":[2,11,4,4],"97":[2,11,4,4],"105":[5,10,5,16],"113":[1,40,6,2],"121":[1,11,6,3],"129":[1,11,6,3],"137":[1,11,6,3],"145":[1,1,7,1],"153":[1,1,7,1],"161":[2,11,4,4],"169":[2,11,4,4],"177":[1,1,7,1],"185":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var log = require('console-log-level')({\n  prefix: function (level) {\n    return new Date().toISOString()\n  },\n  level: 'info'\n})\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'log', log, 0);
            var log = J$.X1(137, J$.W(129, 'log', J$.F(121, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'console-log-level', 21, false)), 0)(J$.T(113, {
                prefix: J$.T(97, function (level) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(73, arguments.callee, this, arguments);
                                arguments = J$.N(81, 'arguments', arguments, 4);
                                level = J$.N(89, 'level', level, 4);
                                return J$.X1(65, J$.Rt(57, J$.M(49, J$.F(41, J$.R(33, 'Date', Date, 2), 1)(), 'toISOString', 0)()));
                            } catch (J$e) {
                                J$.Ex(161, J$e);
                            } finally {
                                if (J$.Fr(169))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 73),
                level: J$.T(105, 'info', 21, false)
            }, 11, false)), log, 3));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
