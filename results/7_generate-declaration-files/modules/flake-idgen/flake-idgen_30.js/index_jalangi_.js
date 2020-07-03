J$.iids = {"9":[1,15,1,22],"17":[1,23,1,36],"25":[1,15,1,37],"33":[1,15,1,37],"41":[1,15,1,37],"49":[3,23,3,30],"57":[3,19,3,32],"65":[3,19,3,32],"73":[3,19,3,32],"81":[4,23,4,30],"89":[4,40,4,53],"97":[4,31,4,55],"105":[4,19,4,56],"113":[4,19,4,56],"121":[4,19,4,56],"129":[6,1,6,8],"137":[6,14,6,25],"145":[6,14,6,32],"147":[6,14,6,30],"153":[6,1,6,33],"155":[6,1,6,13],"161":[6,1,6,34],"169":[7,1,7,8],"177":[7,14,7,25],"185":[7,14,7,32],"187":[7,14,7,30],"193":[7,1,7,33],"195":[7,1,7,13],"201":[7,1,7,34],"209":[1,1,8,1],"217":[1,1,8,1],"225":[1,1,8,1],"233":[1,1,8,1],"241":[1,1,8,1],"249":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FlakeId = require('flake-idgen')\n\nvar flakeIdGen1 = new FlakeId();\nvar flakeIdGen2 = new FlakeId({ epoch: 1300000000000 });\n\nconsole.info(flakeIdGen1.next());\nconsole.info(flakeIdGen2.next());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'FlakeId', FlakeId, 0);
            J$.N(225, 'flakeIdGen1', flakeIdGen1, 0);
            J$.N(233, 'flakeIdGen2', flakeIdGen2, 0);
            var FlakeId = J$.X1(41, J$.W(33, 'FlakeId', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'flake-idgen', 21, false)), FlakeId, 3));
            var flakeIdGen1 = J$.X1(73, J$.W(65, 'flakeIdGen1', J$.F(57, J$.R(49, 'FlakeId', FlakeId, 1), 1)(), flakeIdGen1, 3));
            var flakeIdGen2 = J$.X1(121, J$.W(113, 'flakeIdGen2', J$.F(105, J$.R(81, 'FlakeId', FlakeId, 1), 1)(J$.T(97, {
                epoch: J$.T(89, 1300000000000, 22, false)
            }, 11, false)), flakeIdGen2, 3));
            J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'info', 0)(J$.M(145, J$.R(137, 'flakeIdGen1', flakeIdGen1, 1), 'next', 0)()));
            J$.X1(201, J$.M(193, J$.R(169, 'console', console, 2), 'info', 0)(J$.M(185, J$.R(177, 'flakeIdGen2', flakeIdGen2, 1), 'next', 0)()));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
