J$.iids = {"9":[1,22,1,29],"17":[1,30,1,48],"25":[1,22,1,49],"33":[1,22,1,49],"41":[1,22,1,49],"49":[3,17,3,31],"57":[3,32,3,38],"65":[3,17,3,39],"73":[3,17,3,39],"81":[3,17,3,39],"89":[4,1,4,8],"97":[4,13,4,22],"105":[4,23,4,24],"113":[4,13,4,25],"121":[4,13,4,30],"129":[4,1,4,31],"131":[4,1,4,12],"137":[4,1,4,32],"145":[6,22,6,36],"153":[6,37,6,40],"161":[6,22,6,41],"169":[6,22,6,41],"177":[6,22,6,41],"185":[7,1,7,8],"193":[7,13,7,27],"201":[7,13,7,34],"209":[7,1,7,35],"211":[7,1,7,12],"217":[7,1,7,36],"225":[8,1,8,8],"233":[8,13,8,27],"241":[8,28,8,29],"249":[8,13,8,30],"257":[8,13,8,39],"265":[8,1,8,40],"267":[8,1,8,12],"273":[8,1,8,41],"281":[9,1,9,8],"289":[9,13,9,27],"297":[9,28,9,29],"305":[9,13,9,30],"313":[9,13,9,39],"321":[9,1,9,40],"323":[9,1,9,12],"329":[9,1,9,41],"337":[10,1,10,8],"345":[10,13,10,27],"353":[10,28,10,29],"361":[10,13,10,30],"369":[10,13,10,39],"377":[10,1,10,40],"379":[10,1,10,12],"385":[10,1,10,41],"393":[1,1,11,1],"401":[1,1,11,1],"409":[1,1,11,1],"417":[1,1,11,1],"425":[1,1,11,1],"433":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var creditCardType = require('credit-card-type');\n\nvar visaCards = creditCardType('4111');\nconsole.log(visaCards[0].type);  // 'visa'\n\nvar ambiguousCards = creditCardType('6');\nconsole.log(ambiguousCards.length);       // 3\nconsole.log(ambiguousCards[0].niceType);  // 'Discover'\nconsole.log(ambiguousCards[1].niceType);  // 'UnionPay'\nconsole.log(ambiguousCards[2].niceType);  // 'Maestro'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(393, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(401, 'creditCardType', creditCardType, 0);
            J$.N(409, 'visaCards', visaCards, 0);
            J$.N(417, 'ambiguousCards', ambiguousCards, 0);
            var creditCardType = J$.X1(41, J$.W(33, 'creditCardType', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'credit-card-type', 21, false)), creditCardType, 3));
            var visaCards = J$.X1(81, J$.W(73, 'visaCards', J$.F(65, J$.R(49, 'creditCardType', creditCardType, 1), 0)(J$.T(57, '4111', 21, false)), visaCards, 3));
            J$.X1(137, J$.M(129, J$.R(89, 'console', console, 2), 'log', 0)(J$.G(121, J$.G(113, J$.R(97, 'visaCards', visaCards, 1), J$.T(105, 0, 22, false), 4), 'type', 0)));
            var ambiguousCards = J$.X1(177, J$.W(169, 'ambiguousCards', J$.F(161, J$.R(145, 'creditCardType', creditCardType, 1), 0)(J$.T(153, '6', 21, false)), ambiguousCards, 3));
            J$.X1(217, J$.M(209, J$.R(185, 'console', console, 2), 'log', 0)(J$.G(201, J$.R(193, 'ambiguousCards', ambiguousCards, 1), 'length', 0)));
            J$.X1(273, J$.M(265, J$.R(225, 'console', console, 2), 'log', 0)(J$.G(257, J$.G(249, J$.R(233, 'ambiguousCards', ambiguousCards, 1), J$.T(241, 0, 22, false), 4), 'niceType', 0)));
            J$.X1(329, J$.M(321, J$.R(281, 'console', console, 2), 'log', 0)(J$.G(313, J$.G(305, J$.R(289, 'ambiguousCards', ambiguousCards, 1), J$.T(297, 1, 22, false), 4), 'niceType', 0)));
            J$.X1(385, J$.M(377, J$.R(337, 'console', console, 2), 'log', 0)(J$.G(369, J$.G(361, J$.R(345, 'ambiguousCards', ambiguousCards, 1), J$.T(353, 2, 22, false), 4), 'niceType', 0)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
