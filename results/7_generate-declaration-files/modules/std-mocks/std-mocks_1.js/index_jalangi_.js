J$.iids = {"9":[1,16,1,23],"17":[1,24,1,35],"25":[1,16,1,36],"33":[1,16,1,36],"41":[1,16,1,36],"49":[3,1,3,9],"57":[3,1,3,15],"59":[3,1,3,13],"65":[3,1,3,16],"73":[4,1,4,8],"81":[4,1,4,15],"89":[4,22,4,26],"97":[4,1,4,27],"99":[4,1,4,21],"105":[4,1,4,28],"113":[5,1,5,8],"121":[5,13,5,25],"129":[5,1,5,26],"131":[5,1,5,12],"137":[5,1,5,27],"145":[6,1,6,9],"153":[6,1,6,19],"155":[6,1,6,17],"161":[6,1,6,20],"169":[8,14,8,22],"177":[8,14,8,30],"179":[8,14,8,28],"185":[8,14,8,30],"193":[8,14,8,30],"201":[9,1,9,8],"209":[9,13,9,19],"217":[9,13,9,26],"225":[9,1,9,27],"227":[9,1,9,12],"233":[9,1,9,28],"241":[1,1,10,1],"249":[1,1,10,1],"257":[1,1,10,1],"265":[1,1,10,1],"273":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var stdMocks = require('std-mocks');\n\nstdMocks.use();\nprocess.stdout.write('ok');\nconsole.log('log test\\n');\nstdMocks.restore();\n\nvar output = stdMocks.flush();\nconsole.log(output.stdout); // ['ok', 'log test\\n']\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(241, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(249, 'stdMocks', stdMocks, 0);
            J$.N(257, 'output', output, 0);
            var stdMocks = J$.X1(41, J$.W(33, 'stdMocks', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'std-mocks', 21, false)), stdMocks, 3));
            J$.X1(65, J$.M(57, J$.R(49, 'stdMocks', stdMocks, 1), 'use', 0)());
            J$.X1(105, J$.M(97, J$.G(81, J$.R(73, 'process', process, 2), 'stdout', 0), 'write', 0)(J$.T(89, 'ok', 21, false)));
            J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.T(121, 'log test\n', 21, false)));
            J$.X1(161, J$.M(153, J$.R(145, 'stdMocks', stdMocks, 1), 'restore', 0)());
            var output = J$.X1(193, J$.W(185, 'output', J$.M(177, J$.R(169, 'stdMocks', stdMocks, 1), 'flush', 0)(), output, 3));
            J$.X1(233, J$.M(225, J$.R(201, 'console', console, 2), 'log', 0)(J$.G(217, J$.R(209, 'output', output, 1), 'stdout', 0)));
        } catch (J$e) {
            J$.Ex(265, J$e);
        } finally {
            if (J$.Sr(273)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
