J$.iids = {"9":[1,15,1,22],"17":[1,23,1,36],"25":[1,15,1,37],"33":[1,15,1,37],"41":[1,15,1,37],"49":[2,22,2,29],"57":[2,18,2,31],"65":[2,18,2,31],"73":[2,18,2,31],"81":[4,1,4,8],"89":[4,13,4,23],"97":[4,13,4,30],"99":[4,13,4,28],"105":[4,1,4,31],"107":[4,1,4,12],"113":[4,1,4,32],"121":[5,1,5,8],"129":[5,13,5,23],"137":[5,13,5,30],"139":[5,13,5,28],"145":[5,1,5,31],"147":[5,1,5,12],"153":[5,1,5,32],"161":[6,1,6,8],"169":[6,13,6,23],"177":[6,13,6,30],"179":[6,13,6,28],"185":[6,1,6,31],"187":[6,1,6,12],"193":[6,1,6,32],"201":[1,1,7,1],"209":[1,1,7,1],"217":[1,1,7,1],"225":[1,1,7,1],"233":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FlakeId = require('flake-idgen');\nvar flakeIdGen = new FlakeId();\n\nconsole.log(flakeIdGen.next());\nconsole.log(flakeIdGen.next());\nconsole.log(flakeIdGen.next());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(201, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(209, 'FlakeId', FlakeId, 0);
            J$.N(217, 'flakeIdGen', flakeIdGen, 0);
            var FlakeId = J$.X1(41, J$.W(33, 'FlakeId', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'flake-idgen', 21, false)), FlakeId, 3));
            var flakeIdGen = J$.X1(73, J$.W(65, 'flakeIdGen', J$.F(57, J$.R(49, 'FlakeId', FlakeId, 1), 1)(), flakeIdGen, 3));
            J$.X1(113, J$.M(105, J$.R(81, 'console', console, 2), 'log', 0)(J$.M(97, J$.R(89, 'flakeIdGen', flakeIdGen, 1), 'next', 0)()));
            J$.X1(153, J$.M(145, J$.R(121, 'console', console, 2), 'log', 0)(J$.M(137, J$.R(129, 'flakeIdGen', flakeIdGen, 1), 'next', 0)()));
            J$.X1(193, J$.M(185, J$.R(161, 'console', console, 2), 'log', 0)(J$.M(177, J$.R(169, 'flakeIdGen', flakeIdGen, 1), 'next', 0)()));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
