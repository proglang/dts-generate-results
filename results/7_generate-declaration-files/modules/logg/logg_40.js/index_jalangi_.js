J$.iids = {"9":[2,12,2,19],"17":[2,20,2,26],"25":[2,12,2,27],"33":[2,12,2,27],"41":[2,12,2,27],"49":[5,1,5,5],"57":[5,1,5,18],"59":[5,1,5,16],"65":[5,1,5,19],"73":[8,1,8,5],"81":[8,16,8,33],"89":[8,1,8,34],"91":[8,1,8,15],"97":[8,47,8,51],"105":[8,47,8,57],"113":[8,47,8,64],"121":[8,1,8,65],"123":[8,1,8,46],"129":[8,1,8,66],"137":[1,1,10,1],"145":[1,1,10,1],"153":[1,1,10,1],"161":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// this is a debug file...\nvar logg = require('logg');\n\n// display messages to console\nlogg.addConsole();\n\n// set logging level of \"app.model.apple\" to lowest.\nlogg.getLogger('app.model.apple').setLogLevel(logg.Level.FINEST);\n\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'logg', logg, 0);
            var logg = J$.X1(41, J$.W(33, 'logg', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'logg', 21, false)), logg, 3));
            J$.X1(65, J$.M(57, J$.R(49, 'logg', logg, 1), 'addConsole', 0)());
            J$.X1(129, J$.M(121, J$.M(89, J$.R(73, 'logg', logg, 1), 'getLogger', 0)(J$.T(81, 'app.model.apple', 21, false)), 'setLogLevel', 0)(J$.G(113, J$.G(105, J$.R(97, 'logg', logg, 1), 'Level', 0), 'FINEST', 0)));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
