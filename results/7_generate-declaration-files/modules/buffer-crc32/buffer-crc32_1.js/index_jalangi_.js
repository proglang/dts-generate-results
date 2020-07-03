J$.iids = {"9":[1,13,1,20],"17":[1,21,1,35],"25":[1,13,1,36],"33":[1,13,1,36],"41":[1,13,1,36],"49":[3,11,3,17],"57":[3,19,3,23],"65":[3,25,3,29],"73":[3,31,3,35],"81":[3,37,3,41],"89":[3,43,3,47],"97":[3,49,3,53],"105":[3,55,3,59],"113":[3,61,3,65],"121":[3,67,3,71],"129":[3,18,3,72],"137":[3,11,3,73],"145":[3,11,3,73],"153":[3,11,3,73],"161":[4,1,4,6],"169":[4,7,4,10],"177":[4,1,4,11],"185":[4,1,4,11],"193":[7,1,7,6],"201":[7,14,7,17],"209":[7,1,7,18],"211":[7,1,7,13],"217":[7,1,7,18],"225":[8,1,8,6],"233":[8,16,8,19],"241":[8,1,8,20],"243":[8,1,8,15],"249":[8,1,8,20],"257":[12,1,12,6],"265":[12,7,12,14],"273":[12,1,12,15],"281":[12,1,12,15],"289":[15,18,15,23],"297":[15,24,15,29],"305":[15,18,15,30],"313":[15,18,15,30],"321":[15,18,15,30],"329":[16,18,16,23],"337":[16,24,16,27],"345":[16,29,16,39],"353":[16,18,16,40],"361":[16,18,16,40],"369":[16,18,16,40],"377":[17,18,17,23],"385":[17,24,17,29],"393":[17,31,17,41],"401":[17,18,17,42],"409":[17,18,17,42],"417":[17,18,17,42],"425":[18,18,18,23],"433":[18,24,18,27],"441":[18,29,18,39],"449":[18,18,18,40],"457":[18,18,18,40],"465":[18,18,18,40],"473":[19,16,19,21],"481":[19,22,19,28],"489":[19,30,19,40],"497":[19,16,19,41],"505":[19,16,19,41],"513":[19,16,19,41],"521":[1,1,20,1],"529":[1,1,20,1],"537":[1,1,20,1],"545":[1,1,20,1],"553":[1,1,20,1],"561":[1,1,20,1],"569":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var crc32 = require('buffer-crc32');\n// works with buffers\nvar buf = Buffer([0x00, 0x73, 0x75, 0x70, 0x20, 0x62, 0x72, 0x6f, 0x00])\ncrc32(buf) // -> <Buffer 94 5a ab 4a>\n\n// has convenience methods for getting signed or unsigned ints\ncrc32.signed(buf) // -> -1805997238\ncrc32.unsigned(buf) // -> 2488970058\n\n// will cast to buffer if given a string, so you can\n// directly use foreign characters safely\ncrc32('自動販売機') // -> <Buffer cb 03 1a c5>\n\n// and works in append mode too\nvar partialCrc = crc32('hey');\nvar partialCrc = crc32(' ', partialCrc);\nvar partialCrc = crc32('sup', partialCrc);\nvar partialCrc = crc32(' ', partialCrc);\nvar finalCrc = crc32('bros', partialCrc); // -> <Buffer 47 fa 55 70>\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(521, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(529, 'crc32', crc32, 0);
            J$.N(537, 'buf', buf, 0);
            J$.N(545, 'partialCrc', partialCrc, 0);
            J$.N(553, 'finalCrc', finalCrc, 0);
            var crc32 = J$.X1(41, J$.W(33, 'crc32', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'buffer-crc32', 21, false)), crc32, 3));
            var buf = J$.X1(153, J$.W(145, 'buf', J$.F(137, J$.R(49, 'Buffer', Buffer, 2), 0)(J$.T(129, [
                J$.T(57, 0x00, 22, false),
                J$.T(65, 0x73, 22, false),
                J$.T(73, 0x75, 22, false),
                J$.T(81, 0x70, 22, false),
                J$.T(89, 0x20, 22, false),
                J$.T(97, 0x62, 22, false),
                J$.T(105, 0x72, 22, false),
                J$.T(113, 0x6f, 22, false),
                J$.T(121, 0x00, 22, false)
            ], 10, false)), buf, 3));
            J$.X1(185, J$.F(177, J$.R(161, 'crc32', crc32, 1), 0)(J$.R(169, 'buf', buf, 1)));
            J$.X1(217, J$.M(209, J$.R(193, 'crc32', crc32, 1), 'signed', 0)(J$.R(201, 'buf', buf, 1)));
            J$.X1(249, J$.M(241, J$.R(225, 'crc32', crc32, 1), 'unsigned', 0)(J$.R(233, 'buf', buf, 1)));
            J$.X1(281, J$.F(273, J$.R(257, 'crc32', crc32, 1), 0)(J$.T(265, '自動販売機', 21, false)));
            var partialCrc = J$.X1(321, J$.W(313, 'partialCrc', J$.F(305, J$.R(289, 'crc32', crc32, 1), 0)(J$.T(297, 'hey', 21, false)), partialCrc, 3));
            var partialCrc = J$.X1(369, J$.W(361, 'partialCrc', J$.F(353, J$.R(329, 'crc32', crc32, 1), 0)(J$.T(337, ' ', 21, false), J$.R(345, 'partialCrc', partialCrc, 1)), partialCrc, 3));
            var partialCrc = J$.X1(417, J$.W(409, 'partialCrc', J$.F(401, J$.R(377, 'crc32', crc32, 1), 0)(J$.T(385, 'sup', 21, false), J$.R(393, 'partialCrc', partialCrc, 1)), partialCrc, 3));
            var partialCrc = J$.X1(465, J$.W(457, 'partialCrc', J$.F(449, J$.R(425, 'crc32', crc32, 1), 0)(J$.T(433, ' ', 21, false), J$.R(441, 'partialCrc', partialCrc, 1)), partialCrc, 3));
            var finalCrc = J$.X1(513, J$.W(505, 'finalCrc', J$.F(497, J$.R(473, 'crc32', crc32, 1), 0)(J$.T(481, 'bros', 21, false), J$.R(489, 'partialCrc', partialCrc, 1)), finalCrc, 3));
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
