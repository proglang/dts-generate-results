J$.iids = {"9":[1,13,1,20],"17":[1,21,1,44],"25":[1,13,1,45],"33":[1,13,1,45],"41":[1,13,1,45],"49":[3,16,3,21],"57":[3,22,3,28],"65":[3,40,3,64],"73":[3,30,3,66],"81":[3,16,3,67],"89":[3,16,3,67],"97":[3,16,3,67],"105":[1,1,9,1],"113":[1,1,9,1],"121":[1,1,9,1],"129":[1,1,9,1],"137":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var proxy = require('http-proxy-middleware');\n\nvar apiProxy = proxy('/api', { target: 'http://www.example.org' });\n//                   \\____/   \\_____________________________/\n//                     |                    |\n//                   context             options\n\n// 'apiProxy' is now ready to be used as middleware in a server.\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(105, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(113, 'proxy', proxy, 0);
            J$.N(121, 'apiProxy', apiProxy, 0);
            var proxy = J$.X1(41, J$.W(33, 'proxy', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'http-proxy-middleware', 21, false)), proxy, 3));
            var apiProxy = J$.X1(97, J$.W(89, 'apiProxy', J$.F(81, J$.R(49, 'proxy', proxy, 1), 0)(J$.T(57, '/api', 21, false), J$.T(73, {
                target: J$.T(65, 'http://www.example.org', 21, false)
            }, 11, false)), apiProxy, 3));
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
