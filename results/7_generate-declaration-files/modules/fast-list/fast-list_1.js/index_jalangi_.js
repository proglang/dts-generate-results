J$.iids = {"9":[1,16,1,23],"17":[1,24,1,35],"25":[1,16,1,36],"33":[1,16,1,36],"41":[1,16,1,36],"49":[2,16,2,24],"57":[2,12,2,26],"65":[2,12,2,26],"73":[2,12,2,26],"81":[3,1,3,5],"89":[3,11,3,16],"97":[3,1,3,17],"99":[3,1,3,10],"105":[3,1,3,17],"113":[4,1,4,5],"121":[4,14,4,19],"129":[4,1,4,20],"131":[4,1,4,13],"137":[4,1,4,20],"145":[5,1,5,5],"153":[5,11,5,16],"161":[5,1,5,17],"163":[5,1,5,10],"169":[5,1,5,17],"177":[6,1,6,8],"185":[6,13,6,17],"193":[6,13,6,24],"201":[6,1,6,25],"203":[6,1,6,12],"209":[6,1,6,25],"217":[7,1,7,8],"225":[7,13,7,17],"233":[7,13,7,23],"235":[7,13,7,21],"241":[7,1,7,24],"243":[7,1,7,12],"249":[7,1,7,24],"257":[8,1,8,8],"265":[8,13,8,17],"273":[8,13,8,25],"275":[8,13,8,23],"281":[8,1,8,26],"283":[8,1,8,12],"289":[8,1,8,26],"297":[9,1,9,8],"305":[9,13,9,17],"313":[9,13,9,25],"315":[9,13,9,23],"321":[9,1,9,26],"323":[9,1,9,12],"329":[9,1,9,26],"337":[1,1,10,1],"345":[1,1,10,1],"353":[1,1,10,1],"361":[1,1,10,1],"369":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var FastList = require(\"fast-list\")\nvar list = new FastList()\nlist.push(\"foo\")\nlist.unshift(\"bar\")\nlist.push(\"baz\")\nconsole.log(list.length) // 2\nconsole.log(list.pop()) // baz\nconsole.log(list.shift()) // bar\nconsole.log(list.shift()) // foo\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(337, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(345, 'FastList', FastList, 0);
            J$.N(353, 'list', list, 0);
            var FastList = J$.X1(41, J$.W(33, 'FastList', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "fast-list", 21, false)), FastList, 3));
            var list = J$.X1(73, J$.W(65, 'list', J$.F(57, J$.R(49, 'FastList', FastList, 1), 1)(), list, 3));
            J$.X1(105, J$.M(97, J$.R(81, 'list', list, 1), 'push', 0)(J$.T(89, "foo", 21, false)));
            J$.X1(137, J$.M(129, J$.R(113, 'list', list, 1), 'unshift', 0)(J$.T(121, "bar", 21, false)));
            J$.X1(169, J$.M(161, J$.R(145, 'list', list, 1), 'push', 0)(J$.T(153, "baz", 21, false)));
            J$.X1(209, J$.M(201, J$.R(177, 'console', console, 2), 'log', 0)(J$.G(193, J$.R(185, 'list', list, 1), 'length', 0)));
            J$.X1(249, J$.M(241, J$.R(217, 'console', console, 2), 'log', 0)(J$.M(233, J$.R(225, 'list', list, 1), 'pop', 0)()));
            J$.X1(289, J$.M(281, J$.R(257, 'console', console, 2), 'log', 0)(J$.M(273, J$.R(265, 'list', list, 1), 'shift', 0)()));
            J$.X1(329, J$.M(321, J$.R(297, 'console', console, 2), 'log', 0)(J$.M(313, J$.R(305, 'list', list, 1), 'shift', 0)()));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
