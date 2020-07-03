J$.iids = {"9":[1,14,1,21],"17":[1,22,1,30],"25":[1,14,1,31],"33":[1,14,1,31],"41":[1,14,1,31],"49":[3,13,3,19],"57":[3,27,3,30],"65":[3,13,3,31],"67":[3,13,3,26],"73":[3,13,3,31],"81":[3,13,3,31],"89":[4,1,4,7],"97":[4,15,4,20],"105":[4,1,4,21],"107":[4,1,4,14],"113":[4,1,4,21],"121":[5,1,5,7],"129":[5,1,5,14],"137":[5,1,5,20],"145":[5,1,5,20],"153":[1,1,6,1],"161":[1,1,6,1],"169":[1,1,6,1],"177":[1,1,6,1],"185":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var varint = require('varint')\n\nvar bytes = varint.encode(300) // === [0xAC, 0x02]\nvarint.decode(bytes) // 300\nvarint.decode.bytes // 2 (the last decode() call required 2 bytes)\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(153, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(161, 'varint', varint, 0);
            J$.N(169, 'bytes', bytes, 0);
            var varint = J$.X1(41, J$.W(33, 'varint', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'varint', 21, false)), varint, 3));
            var bytes = J$.X1(81, J$.W(73, 'bytes', J$.M(65, J$.R(49, 'varint', varint, 1), 'encode', 0)(J$.T(57, 300, 22, false)), bytes, 3));
            J$.X1(113, J$.M(105, J$.R(89, 'varint', varint, 1), 'decode', 0)(J$.R(97, 'bytes', bytes, 1)));
            J$.X1(145, J$.G(137, J$.G(129, J$.R(121, 'varint', varint, 1), 'decode', 0), 'bytes', 0));
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
