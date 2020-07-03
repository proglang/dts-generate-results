J$.iids = {"9":[1,13,1,20],"17":[1,21,1,38],"25":[1,13,1,39],"33":[1,13,1,39],"41":[1,13,1,39],"49":[3,17,3,22],"57":[4,14,4,17],"65":[5,13,5,16],"73":[6,27,6,32],"81":[8,9,8,27],"89":[8,28,8,36],"97":[8,9,8,37],"105":[8,9,8,38],"113":[7,17,9,6],"121":[7,17,9,6],"129":[7,17,9,6],"137":[7,17,9,6],"145":[7,17,9,6],"153":[3,23,10,2],"161":[3,13,10,3],"169":[3,13,10,3],"177":[3,13,10,3],"185":[12,1,12,6],"193":[12,11,12,16],"201":[12,18,12,25],"209":[12,1,12,26],"211":[12,1,12,10],"217":[12,1,12,27],"225":[13,1,13,6],"233":[13,11,13,16],"241":[13,1,13,17],"243":[13,1,13,10],"249":[13,1,13,18],"257":[1,1,14,1],"265":[1,1,14,1],"273":[1,1,14,1],"281":[7,17,9,6],"289":[7,17,9,6],"297":[1,1,14,1],"305":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Cache = require('stale-lru-cache');\n\nvar cache = new Cache({\n    maxSize: 100,\n    maxAge: 600,\n    staleWhileRevalidate: 86400,\n    revalidate: function (key, callback) {\n        fetchSomeAsyncData(callback);\n    }\n});\n\ncache.set('key', 'value'); // true\ncache.get('key'); // 'value'\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(257, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(265, 'Cache', Cache, 0);
            J$.N(273, 'cache', cache, 0);
            var Cache = J$.X1(41, J$.W(33, 'Cache', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'stale-lru-cache', 21, false)), Cache, 3));
            var cache = J$.X1(177, J$.W(169, 'cache', J$.F(161, J$.R(49, 'Cache', Cache, 1), 1)(J$.T(153, {
                maxSize: J$.T(57, 100, 22, false),
                maxAge: J$.T(65, 600, 22, false),
                staleWhileRevalidate: J$.T(73, 86400, 22, false),
                revalidate: J$.T(145, function (key, callback) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(113, arguments.callee, this, arguments);
                                arguments = J$.N(121, 'arguments', arguments, 4);
                                key = J$.N(129, 'key', key, 4);
                                callback = J$.N(137, 'callback', callback, 4);
                                J$.X1(105, J$.F(97, J$.R(81, 'fetchSomeAsyncData', fetchSomeAsyncData, 2), 0)(J$.R(89, 'callback', callback, 0)));
                            } catch (J$e) {
                                J$.Ex(281, J$e);
                            } finally {
                                if (J$.Fr(289))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 113)
            }, 11, false)), cache, 3));
            J$.X1(217, J$.M(209, J$.R(185, 'cache', cache, 1), 'set', 0)(J$.T(193, 'key', 21, false), J$.T(201, 'value', 21, false)));
            J$.X1(249, J$.M(241, J$.R(225, 'cache', cache, 1), 'get', 0)(J$.T(233, 'key', 21, false)));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
