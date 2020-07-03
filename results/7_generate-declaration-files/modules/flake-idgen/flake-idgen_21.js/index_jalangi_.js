J$.iids = {"9":[1,15,1,22],"17":[1,23,1,36],"25":[1,15,1,37],"33":[1,15,1,37],"41":[1,15,1,37],"49":[3,23,3,30],"57":[3,19,3,32],"65":[3,19,3,32],"73":[3,19,3,32],"81":[4,23,4,30],"89":[4,45,4,46],"97":[4,56,4,57],"105":[4,31,4,59],"113":[4,19,4,60],"121":[4,19,4,60],"129":[4,19,4,60],"137":[6,1,6,8],"145":[6,14,6,25],"153":[6,14,6,32],"155":[6,14,6,30],"161":[6,1,6,33],"163":[6,1,6,13],"169":[6,1,6,34],"177":[7,1,7,8],"185":[7,14,7,25],"193":[7,14,7,32],"195":[7,14,7,30],"201":[7,1,7,33],"203":[7,1,7,13],"209":[7,1,7,34],"217":[1,1,8,1],"225":[1,1,8,1],"233":[1,1,8,1],"241":[1,1,8,1],"249":[1,1,8,1],"257":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FlakeId = require('flake-idgen')\n\nvar flakeIdGen1 = new FlakeId();\nvar flakeIdGen2 = new FlakeId({ datacenter: 9, worker: 7 });\n\nconsole.info(flakeIdGen1.next());\nconsole.info(flakeIdGen2.next());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(225, 'FlakeId', FlakeId, 0);
            J$.N(233, 'flakeIdGen1', flakeIdGen1, 0);
            J$.N(241, 'flakeIdGen2', flakeIdGen2, 0);
            var FlakeId = J$.X1(41, J$.W(33, 'FlakeId', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'flake-idgen', 21, false)), FlakeId, 3));
            var flakeIdGen1 = J$.X1(73, J$.W(65, 'flakeIdGen1', J$.F(57, J$.R(49, 'FlakeId', FlakeId, 1), 1)(), flakeIdGen1, 3));
            var flakeIdGen2 = J$.X1(129, J$.W(121, 'flakeIdGen2', J$.F(113, J$.R(81, 'FlakeId', FlakeId, 1), 1)(J$.T(105, {
                datacenter: J$.T(89, 9, 22, false),
                worker: J$.T(97, 7, 22, false)
            }, 11, false)), flakeIdGen2, 3));
            J$.X1(169, J$.M(161, J$.R(137, 'console', console, 2), 'info', 0)(J$.M(153, J$.R(145, 'flakeIdGen1', flakeIdGen1, 1), 'next', 0)()));
            J$.X1(209, J$.M(201, J$.R(177, 'console', console, 2), 'info', 0)(J$.M(193, J$.R(185, 'flakeIdGen2', flakeIdGen2, 1), 'next', 0)()));
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
