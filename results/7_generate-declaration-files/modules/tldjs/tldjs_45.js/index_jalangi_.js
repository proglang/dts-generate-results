J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,29],"41":[1,13,1,29],"49":[3,1,3,6],"57":[3,17,3,28],"65":[3,1,3,29],"67":[3,1,3,16],"73":[3,1,3,30],"81":[4,1,4,6],"89":[4,20,4,37],"97":[4,1,4,38],"99":[4,1,4,19],"105":[4,1,4,39],"113":[6,15,6,20],"121":[7,16,7,27],"129":[7,15,7,28],"137":[6,38,8,2],"145":[6,15,8,3],"147":[6,15,6,37],"153":[6,15,8,3],"161":[6,15,8,3],"169":[10,1,10,8],"177":[10,19,10,30],"185":[10,1,10,31],"187":[10,1,10,18],"193":[10,1,10,32],"201":[11,1,11,8],"209":[11,22,11,39],"217":[11,1,11,40],"219":[11,1,11,21],"225":[11,1,11,41],"233":[1,1,12,1],"241":[1,1,12,1],"249":[1,1,12,1],"257":[1,1,12,1],"265":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var tldjs = require('tldjs');\n\ntldjs.getDomain('localhost');           // returns null\ntldjs.getSubdomain('vhost.localhost');  // returns null\n\nvar myTldjs = tldjs.fromUserSettings({\n  validHosts: ['localhost']\n});\n\nmyTldjs.getDomain('localhost');           // returns 'localhost'\nmyTldjs.getSubdomain('vhost.localhost');  // returns 'vhost'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(233, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(241, 'tldjs', tldjs, 0);
            J$.N(249, 'myTldjs', myTldjs, 0);
            var tldjs = J$.X1(41, J$.W(33, 'tldjs', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'tldjs', 21, false)), tldjs, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'tldjs', tldjs, 1), 'getDomain', 0)(J$.T(57, 'localhost', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'tldjs', tldjs, 1), 'getSubdomain', 0)(J$.T(89, 'vhost.localhost', 21, false)));
            var myTldjs = J$.X1(161, J$.W(153, 'myTldjs', J$.M(145, J$.R(113, 'tldjs', tldjs, 1), 'fromUserSettings', 0)(J$.T(137, {
                validHosts: J$.T(129, [J$.T(121, 'localhost', 21, false)], 10, false)
            }, 11, false)), myTldjs, 3));
            J$.X1(193, J$.M(185, J$.R(169, 'myTldjs', myTldjs, 1), 'getDomain', 0)(J$.T(177, 'localhost', 21, false)));
            J$.X1(225, J$.M(217, J$.R(201, 'myTldjs', myTldjs, 1), 'getSubdomain', 0)(J$.T(209, 'vhost.localhost', 21, false)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
