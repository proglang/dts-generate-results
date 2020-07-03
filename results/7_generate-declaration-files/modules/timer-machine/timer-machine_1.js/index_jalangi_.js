J$.iids = {"9":[1,13,1,20],"17":[1,21,1,36],"25":[1,13,1,37],"33":[1,13,1,37],"41":[1,13,1,37],"49":[2,19,2,24],"57":[2,15,2,26],"65":[2,15,2,26],"73":[2,15,2,26],"81":[4,1,4,8],"89":[4,1,4,16],"91":[4,1,4,14],"97":[4,1,4,16],"105":[5,1,5,8],"113":[5,1,5,15],"115":[5,1,5,13],"121":[5,1,5,15],"129":[6,1,6,8],"137":[6,1,6,15],"139":[6,1,6,13],"145":[6,1,6,15],"153":[1,1,7,1],"161":[1,1,7,1],"169":[1,1,7,1],"177":[1,1,7,1],"185":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Timer = require('timer-machine')\nvar myTimer = new Timer()\n\nmyTimer.start()\nmyTimer.stop()\nmyTimer.time() // -> time in ms\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'Timer', Timer, 0);
            J$.N(169, 'myTimer', myTimer, 0);
            var Timer = J$.X1(41, J$.W(33, 'Timer', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'timer-machine', 21, false)), Timer, 3));
            var myTimer = J$.X1(73, J$.W(65, 'myTimer', J$.F(57, J$.R(49, 'Timer', Timer, 1), 1)(), myTimer, 3));
            J$.X1(97, J$.M(89, J$.R(81, 'myTimer', myTimer, 1), 'start', 0)());
            J$.X1(121, J$.M(113, J$.R(105, 'myTimer', myTimer, 1), 'stop', 0)());
            J$.X1(145, J$.M(137, J$.R(129, 'myTimer', myTimer, 1), 'time', 0)());
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
