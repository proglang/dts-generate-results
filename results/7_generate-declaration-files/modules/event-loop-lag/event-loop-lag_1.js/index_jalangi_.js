J$.iids = {"9":[1,16,1,20],"17":[1,16,1,20],"25":[1,16,1,20],"33":[2,11,2,18],"41":[2,19,2,35],"49":[2,11,2,36],"57":[2,37,2,45],"65":[2,11,2,46],"73":[2,11,2,46],"81":[2,11,2,46],"89":[4,1,4,8],"97":[4,13,4,35],"105":[4,37,4,40],"113":[4,37,4,42],"121":[4,1,4,43],"123":[4,1,4,12],"129":[4,1,4,44],"137":[1,1,5,1],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var interval = 1000; // how often to refresh our measurement\nvar lag = require('event-loop-lag')(interval);\n\nconsole.log('event loop lag is %d', lag());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'interval', interval, 0);
            J$.N(153, 'lag', lag, 0);
            var interval = J$.X1(25, J$.W(17, 'interval', J$.T(9, 1000, 22, false), interval, 3));
            var lag = J$.X1(81, J$.W(73, 'lag', J$.F(65, J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, 'event-loop-lag', 21, false)), 0)(J$.R(57, 'interval', interval, 1)), lag, 3));
            J$.X1(129, J$.M(121, J$.R(89, 'console', console, 2), 'log', 0)(J$.T(97, 'event loop lag is %d', 21, false), J$.F(113, J$.R(105, 'lag', lag, 1), 0)()));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
