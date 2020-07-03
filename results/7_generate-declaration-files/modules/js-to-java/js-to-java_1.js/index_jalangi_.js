J$.iids = {"9":[1,12,1,19],"17":[1,20,1,32],"25":[1,12,1,33],"33":[1,12,1,33],"41":[1,12,1,33],"49":[4,1,4,5],"57":[4,6,4,23],"65":[4,32,4,37],"73":[4,25,4,39],"81":[4,1,4,40],"89":[4,1,4,41],"97":[8,1,8,5],"105":[8,14,8,18],"113":[8,1,8,19],"115":[8,1,8,13],"121":[8,1,8,20],"129":[12,1,12,5],"137":[12,12,12,19],"145":[12,22,12,23],"153":[12,25,12,26],"161":[12,28,12,29],"169":[12,21,12,30],"177":[12,1,12,31],"179":[12,1,12,11],"185":[12,1,12,32],"193":[16,1,16,5],"201":[16,12,16,17],"209":[16,20,16,21],"217":[16,23,16,24],"225":[16,26,16,27],"233":[16,19,16,28],"241":[16,1,16,29],"243":[16,1,16,11],"249":[16,1,16,30],"257":[18,1,18,5],"265":[18,1,18,11],"273":[18,17,18,18],"281":[18,20,18,21],"289":[18,23,18,24],"297":[18,16,18,25],"305":[18,1,18,26],"307":[18,1,18,15],"313":[18,1,18,27],"321":[1,1,20,1],"329":[1,1,20,1],"337":[1,1,20,1],"345":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var java = require('js-to-java');\n\n// Java: com.java.Object o = new com.java.Object();\njava('com.java.Object', { foo: 'bar' });\n// => {$class: 'com.java.Object', $: { foo: 'bar' }}\n\n// Java: Boolean r;\njava.Boolean(true);\n// => {$class: 'java.lang.Boolean', $: true}\n\n// Java: short[] shorts = new short[] {1, 2, 3};\njava.array('short', [1, 2, 3]);\n// => {$class: '[short', $: [1, 2, 3]}\n\n// Java: int[] ints = new int[] {1, 2, 3};\njava.array('int', [1, 2, 3]);\n// same to the next example\njava.array.int([1, 2, 3]);\n// => {$class: '[int', $: [1, 2, 3]}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(321, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(329, 'java', java, 0);
            var java = J$.X1(41, J$.W(33, 'java', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'js-to-java', 21, false)), java, 3));
            J$.X1(89, J$.F(81, J$.R(49, 'java', java, 1), 0)(J$.T(57, 'com.java.Object', 21, false), J$.T(73, {
                foo: J$.T(65, 'bar', 21, false)
            }, 11, false)));
            J$.X1(121, J$.M(113, J$.R(97, 'java', java, 1), 'Boolean', 0)(J$.T(105, true, 23, false)));
            J$.X1(185, J$.M(177, J$.R(129, 'java', java, 1), 'array', 0)(J$.T(137, 'short', 21, false), J$.T(169, [
                J$.T(145, 1, 22, false),
                J$.T(153, 2, 22, false),
                J$.T(161, 3, 22, false)
            ], 10, false)));
            J$.X1(249, J$.M(241, J$.R(193, 'java', java, 1), 'array', 0)(J$.T(201, 'int', 21, false), J$.T(233, [
                J$.T(209, 1, 22, false),
                J$.T(217, 2, 22, false),
                J$.T(225, 3, 22, false)
            ], 10, false)));
            J$.X1(313, J$.M(305, J$.G(265, J$.R(257, 'java', java, 1), 'array', 0), 'int', 0)(J$.T(297, [
                J$.T(273, 1, 22, false),
                J$.T(281, 2, 22, false),
                J$.T(289, 3, 22, false)
            ], 10, false)));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
