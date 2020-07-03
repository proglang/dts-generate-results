J$.iids = {"9":[1,13,1,20],"17":[1,21,1,33],"25":[1,13,1,34],"33":[2,14,2,19],"41":[2,14,2,34],"43":[2,14,2,32],"49":[1,13,1,34],"57":[1,13,1,34],"65":[2,14,2,34],"73":[2,14,2,34],"81":[1,1,3,1],"89":[1,1,3,1],"97":[1,1,3,1],"105":[1,1,3,1],"113":[1,1,3,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var redis = require(\"redis-mock\"),\n    client = redis.createClient();\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(81, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(89, 'redis', redis, 0);
            J$.N(97, 'client', client, 0);
            var redis = J$.X1(57, J$.W(49, 'redis', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "redis-mock", 21, false)), redis, 3)), client = J$.X1(73, J$.W(65, 'client', J$.M(41, J$.R(33, 'redis', redis, 1), 'createClient', 0)(), client, 3));
        } catch (J$e) {
            J$.Ex(105, J$e);
        } finally {
            if (J$.Sr(113)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
