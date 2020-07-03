J$.iids = {"9":[1,13,1,20],"17":[1,21,1,34],"25":[1,13,1,35],"33":[1,13,1,35],"41":[1,13,1,35],"49":[2,13,2,18],"57":[2,34,2,40],"65":[2,19,2,42],"73":[2,13,2,43],"81":[2,13,2,43],"89":[2,13,2,43],"97":[3,11,3,16],"105":[3,34,3,39],"113":[3,27,3,41],"121":[3,11,3,42],"123":[3,11,3,26],"129":[3,11,3,42],"137":[3,11,3,42],"145":[4,1,4,8],"153":[4,13,4,16],"161":[4,1,4,17],"163":[4,1,4,12],"169":[4,1,4,17],"177":[5,1,5,8],"185":[5,13,5,18],"193":[5,29,5,32],"201":[5,13,5,33],"203":[5,13,5,28],"209":[5,1,5,34],"211":[5,1,5,12],"217":[5,1,5,34],"225":[1,1,6,1],"233":[1,1,6,1],"241":[1,1,6,1],"249":[1,1,6,1],"257":[1,1,6,1],"265":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Codec = require('level-codec')\nvar codec = Codec({ keyEncoding: 'json' })\nvar key = codec.encodeKey({ foo: 'bar' })\nconsole.log(key) // -> '{\"foo\":\"bar\"}'\nconsole.log(codec.decodeKey(key)) // -> { foo: 'bar' }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'Codec', Codec, 0);
            J$.N(241, 'codec', codec, 0);
            J$.N(249, 'key', key, 0);
            var Codec = J$.X1(41, J$.W(33, 'Codec', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'level-codec', 21, false)), Codec, 3));
            var codec = J$.X1(89, J$.W(81, 'codec', J$.F(73, J$.R(49, 'Codec', Codec, 1), 0)(J$.T(65, {
                keyEncoding: J$.T(57, 'json', 21, false)
            }, 11, false)), codec, 3));
            var key = J$.X1(137, J$.W(129, 'key', J$.M(121, J$.R(97, 'codec', codec, 1), 'encodeKey', 0)(J$.T(113, {
                foo: J$.T(105, 'bar', 21, false)
            }, 11, false)), key, 3));
            J$.X1(169, J$.M(161, J$.R(145, 'console', console, 2), 'log', 0)(J$.R(153, 'key', key, 1)));
            J$.X1(217, J$.M(209, J$.R(177, 'console', console, 2), 'log', 0)(J$.M(201, J$.R(185, 'codec', codec, 1), 'decodeKey', 0)(J$.R(193, 'key', key, 1))));
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
