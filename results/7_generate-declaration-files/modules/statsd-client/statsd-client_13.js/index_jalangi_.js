J$.iids = {"9":[1,11,1,18],"17":[1,19,1,34],"25":[1,11,1,35],"33":[2,12,2,15],"41":[2,23,2,43],"49":[2,51,2,55],"57":[2,16,2,56],"65":[2,8,2,57],"73":[1,11,1,35],"81":[1,11,1,35],"89":[2,8,2,57],"97":[2,8,2,57],"105":[1,1,3,1],"113":[1,1,3,1],"121":[1,1,3,1],"129":[1,1,3,1],"137":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var SDC = require('statsd-client'),\n\tsdc = new SDC({host: 'statsd.example.com', port: 8124});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(105, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(113, 'SDC', SDC, 0);
            J$.N(121, 'sdc', sdc, 0);
            var SDC = J$.X1(81, J$.W(73, 'SDC', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'statsd-client', 21, false)), SDC, 3)), sdc = J$.X1(97, J$.W(89, 'sdc', J$.F(65, J$.R(33, 'SDC', SDC, 1), 1)(J$.T(57, {
                    host: J$.T(41, 'statsd.example.com', 21, false),
                    port: J$.T(49, 8124, 22, false)
                }, 11, false)), sdc, 3));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
