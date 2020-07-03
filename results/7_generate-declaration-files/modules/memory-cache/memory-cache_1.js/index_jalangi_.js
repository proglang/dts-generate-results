J$.iids = {"9":[1,13,1,20],"10":[11,17,11,30],"17":[1,21,1,35],"18":[11,17,11,38],"25":[1,13,1,36],"26":[14,13,14,55],"33":[1,13,1,36],"34":[17,17,17,53],"41":[1,13,1,36],"42":[27,15,27,56],"49":[5,1,5,6],"50":[28,15,28,59],"57":[5,11,5,16],"65":[5,18,5,23],"73":[5,1,5,24],"75":[5,1,5,10],"81":[5,1,5,25],"89":[6,1,6,8],"97":[6,13,6,18],"105":[6,23,6,28],"113":[6,13,6,29],"115":[6,13,6,22],"121":[6,1,6,30],"123":[6,1,6,12],"129":[6,1,6,31],"137":[10,1,10,6],"145":[10,11,10,20],"153":[10,22,10,33],"161":[10,35,10,38],"169":[11,5,11,12],"177":[11,17,11,20],"185":[11,23,11,30],"193":[11,33,11,38],"201":[11,5,11,39],"203":[11,5,11,16],"209":[11,5,11,40],"217":[10,40,12,2],"225":[10,40,12,2],"233":[10,40,12,2],"241":[10,40,12,2],"249":[10,40,12,2],"257":[10,1,12,3],"259":[10,1,10,10],"265":[10,1,12,4],"273":[14,1,14,8],"281":[14,13,14,32],"289":[14,35,14,40],"297":[14,45,14,54],"305":[14,35,14,55],"307":[14,35,14,44],"313":[14,1,14,56],"315":[14,1,14,12],"321":[14,1,14,57],"329":[16,1,16,11],"337":[17,5,17,12],"345":[17,17,17,30],"353":[17,33,17,38],"361":[17,43,17,52],"369":[17,33,17,53],"371":[17,33,17,42],"377":[17,5,17,54],"379":[17,5,17,16],"385":[17,5,17,55],"393":[16,12,18,2],"401":[16,12,18,2],"409":[16,12,18,2],"417":[18,4,18,7],"425":[16,1,18,8],"433":[16,1,18,9],"441":[22,20,22,25],"449":[22,16,22,33],"451":[22,20,22,31],"457":[22,16,22,33],"465":[22,16,22,33],"473":[24,1,24,9],"481":[24,14,24,19],"489":[24,21,24,29],"497":[24,1,24,30],"499":[24,1,24,13],"505":[24,1,24,31],"513":[26,1,26,11],"521":[27,3,27,10],"529":[27,15,27,37],"537":[27,40,27,45],"545":[27,50,27,55],"553":[27,40,27,56],"555":[27,40,27,49],"561":[27,3,27,57],"563":[27,3,27,14],"569":[27,3,27,58],"577":[28,3,28,10],"585":[28,15,28,37],"593":[28,40,28,48],"601":[28,53,28,58],"609":[28,40,28,59],"611":[28,40,28,52],"617":[28,3,28,60],"619":[28,3,28,14],"625":[28,3,28,61],"633":[26,12,29,2],"641":[26,12,29,2],"649":[26,12,29,2],"657":[29,4,29,7],"665":[26,1,29,8],"673":[26,1,29,9],"681":[1,1,30,1],"689":[1,1,30,1],"697":[1,1,30,1],"705":[10,40,12,2],"713":[10,40,12,2],"721":[16,12,18,2],"729":[16,12,18,2],"737":[26,12,29,2],"745":[26,12,29,2],"753":[1,1,30,1],"761":[1,1,30,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var cache = require('memory-cache');\n\n// now just use the cache\n\ncache.put('foo', 'bar');\nconsole.log(cache.get('foo'));\n\n// that wasn't too interesting, here's the good part\n\ncache.put('houdini', 'disappear', 100, function(key, value) {\n    console.log(key + ' did ' + value);\n}); // Time in ms\n\nconsole.log('Houdini will now ' + cache.get('houdini'));\n\nsetTimeout(function() {\n    console.log('Houdini is ' + cache.get('houdini'));\n}, 200);\n\n\n// create new cache instance\nvar newCache = new cache.Cache();\n\nnewCache.put('foo', 'newbaz');\n\nsetTimeout(function() {\n  console.log('foo in old cache is ' + cache.get('foo'));\n  console.log('foo in new cache is ' + newCache.get('foo'));\n}, 200);\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(681, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(689, 'cache', cache, 0);
            J$.N(697, 'newCache', newCache, 0);
            var cache = J$.X1(41, J$.W(33, 'cache', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'memory-cache', 21, false)), cache, 3));
            J$.X1(81, J$.M(73, J$.R(49, 'cache', cache, 1), 'put', 0)(J$.T(57, 'foo', 21, false), J$.T(65, 'bar', 21, false)));
            J$.X1(129, J$.M(121, J$.R(89, 'console', console, 2), 'log', 0)(J$.M(113, J$.R(97, 'cache', cache, 1), 'get', 0)(J$.T(105, 'foo', 21, false))));
            J$.X1(265, J$.M(257, J$.R(137, 'cache', cache, 1), 'put', 0)(J$.T(145, 'houdini', 21, false), J$.T(153, 'disappear', 21, false), J$.T(161, 100, 22, false), J$.T(249, function (key, value) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            key = J$.N(233, 'key', key, 4);
                            value = J$.N(241, 'value', value, 4);
                            J$.X1(209, J$.M(201, J$.R(169, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.R(177, 'key', key, 0), J$.T(185, ' did ', 21, false), 0), J$.R(193, 'value', value, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(705, J$e);
                        } finally {
                            if (J$.Fr(713))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217)));
            J$.X1(321, J$.M(313, J$.R(273, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.T(281, 'Houdini will now ', 21, false), J$.M(305, J$.R(289, 'cache', cache, 1), 'get', 0)(J$.T(297, 'houdini', 21, false)), 0)));
            J$.X1(433, J$.F(425, J$.R(329, 'setTimeout', setTimeout, 2), 0)(J$.T(409, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(393, arguments.callee, this, arguments);
                            arguments = J$.N(401, 'arguments', arguments, 4);
                            J$.X1(385, J$.M(377, J$.R(337, 'console', console, 2), 'log', 0)(J$.B(34, '+', J$.T(345, 'Houdini is ', 21, false), J$.M(369, J$.R(353, 'cache', cache, 1), 'get', 0)(J$.T(361, 'houdini', 21, false)), 0)));
                        } catch (J$e) {
                            J$.Ex(721, J$e);
                        } finally {
                            if (J$.Fr(729))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 393), J$.T(417, 200, 22, false)));
            var newCache = J$.X1(465, J$.W(457, 'newCache', J$.M(449, J$.R(441, 'cache', cache, 1), 'Cache', 2)(), newCache, 3));
            J$.X1(505, J$.M(497, J$.R(473, 'newCache', newCache, 1), 'put', 0)(J$.T(481, 'foo', 21, false), J$.T(489, 'newbaz', 21, false)));
            J$.X1(673, J$.F(665, J$.R(513, 'setTimeout', setTimeout, 2), 0)(J$.T(649, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(633, arguments.callee, this, arguments);
                            arguments = J$.N(641, 'arguments', arguments, 4);
                            J$.X1(569, J$.M(561, J$.R(521, 'console', console, 2), 'log', 0)(J$.B(42, '+', J$.T(529, 'foo in old cache is ', 21, false), J$.M(553, J$.R(537, 'cache', cache, 1), 'get', 0)(J$.T(545, 'foo', 21, false)), 0)));
                            J$.X1(625, J$.M(617, J$.R(577, 'console', console, 2), 'log', 0)(J$.B(50, '+', J$.T(585, 'foo in new cache is ', 21, false), J$.M(609, J$.R(593, 'newCache', newCache, 1), 'get', 0)(J$.T(601, 'foo', 21, false)), 0)));
                        } catch (J$e) {
                            J$.Ex(737, J$e);
                        } finally {
                            if (J$.Fr(745))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 633), J$.T(657, 200, 22, false)));
        } catch (J$e) {
            J$.Ex(753, J$e);
        } finally {
            if (J$.Sr(761)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
