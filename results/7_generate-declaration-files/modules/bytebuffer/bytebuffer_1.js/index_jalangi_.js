J$.iids = {"9":[1,18,1,25],"10":[6,13,6,51],"17":[1,26,1,38],"25":[1,18,1,39],"33":[1,18,1,39],"41":[1,18,1,39],"49":[3,14,3,24],"57":[3,10,3,26],"65":[4,27,4,41],"73":[3,10,4,42],"75":[3,10,4,26],"81":[3,10,5,20],"83":[3,10,5,18],"89":[3,10,5,20],"97":[3,10,5,20],"105":[6,1,6,8],"113":[6,13,6,15],"121":[6,13,6,29],"123":[6,13,6,27],"129":[6,30,6,51],"137":[6,1,6,52],"139":[6,1,6,12],"145":[6,1,6,53],"153":[1,1,7,1],"161":[1,1,7,1],"169":[1,1,7,1],"177":[1,1,7,1],"185":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var ByteBuffer = require(\"bytebuffer\");\n\nvar bb = new ByteBuffer()\n            .writeIString(\"Hello world!\")\n            .flip();\nconsole.log(bb.readIString()+\" from bytebuffer.js\");\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'ByteBuffer', ByteBuffer, 0);
            J$.N(169, 'bb', bb, 0);
            var ByteBuffer = J$.X1(41, J$.W(33, 'ByteBuffer', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "bytebuffer", 21, false)), ByteBuffer, 3));
            var bb = J$.X1(97, J$.W(89, 'bb', J$.M(81, J$.M(73, J$.F(57, J$.R(49, 'ByteBuffer', ByteBuffer, 1), 1)(), 'writeIString', 0)(J$.T(65, "Hello world!", 21, false)), 'flip', 0)(), bb, 3));
            J$.X1(145, J$.M(137, J$.R(105, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.M(121, J$.R(113, 'bb', bb, 1), 'readIString', 0)(), J$.T(129, " from bytebuffer.js", 21, false), 0)));
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
