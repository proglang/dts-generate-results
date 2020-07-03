J$.iids = {"9":[1,16,1,23],"17":[1,24,1,43],"25":[1,16,1,44],"33":[1,16,1,44],"41":[1,16,1,44],"49":[2,13,2,21],"57":[2,22,2,25],"65":[2,9,2,26],"73":[2,9,2,26],"81":[2,9,2,26],"89":[4,1,4,2],"97":[4,7,4,8],"105":[4,10,4,14],"113":[4,1,4,15],"115":[4,1,4,6],"121":[4,1,4,15],"129":[6,1,6,8],"137":[6,13,6,14],"145":[6,19,6,20],"153":[6,13,6,21],"155":[6,13,6,18],"161":[6,1,6,22],"163":[6,1,6,12],"169":[6,1,6,22],"177":[7,1,7,8],"185":[7,13,7,14],"193":[7,19,7,20],"201":[7,13,7,21],"203":[7,13,7,18],"209":[7,1,7,22],"211":[7,1,7,12],"217":[7,1,7,22],"225":[1,1,8,1],"233":[1,1,8,1],"241":[1,1,8,1],"249":[1,1,8,1],"257":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var BitArray = require(\"minimal-bit-array\")\nvar x = new BitArray(100)\n\nx.set(5, true)\n\nconsole.log(x.get(4))     //Prints false\nconsole.log(x.get(5))     //Prints true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'BitArray', BitArray, 0);
            J$.N(241, 'x', x, 0);
            var BitArray = J$.X1(41, J$.W(33, 'BitArray', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "minimal-bit-array", 21, false)), BitArray, 3));
            var x = J$.X1(81, J$.W(73, 'x', J$.F(65, J$.R(49, 'BitArray', BitArray, 1), 1)(J$.T(57, 100, 22, false)), x, 3));
            J$.X1(121, J$.M(113, J$.R(89, 'x', x, 1), 'set', 0)(J$.T(97, 5, 22, false), J$.T(105, true, 23, false)));
            J$.X1(169, J$.M(161, J$.R(129, 'console', console, 2), 'log', 0)(J$.M(153, J$.R(137, 'x', x, 1), 'get', 0)(J$.T(145, 4, 22, false))));
            J$.X1(217, J$.M(209, J$.R(177, 'console', console, 2), 'log', 0)(J$.M(201, J$.R(185, 'x', x, 1), 'get', 0)(J$.T(193, 5, 22, false))));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
