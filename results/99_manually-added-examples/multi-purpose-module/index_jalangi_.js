J$.iids = {"9":[1,26,1,33],"10":[10,13,10,32],"17":[1,34,1,58],"18":[10,13,10,45],"25":[1,26,1,59],"33":[1,26,1,59],"41":[1,26,1,59],"49":[4,1,4,8],"57":[4,13,4,31],"65":[4,32,4,38],"73":[4,40,4,45],"81":[4,13,4,46],"89":[4,1,4,47],"91":[4,1,4,12],"97":[4,1,4,48],"105":[9,13,9,31],"113":[9,32,9,38],"121":[9,40,9,45],"129":[9,9,9,46],"137":[9,9,9,46],"145":[9,9,9,46],"153":[10,1,10,8],"161":[10,13,10,14],"169":[10,13,10,24],"177":[10,27,10,32],"185":[10,35,10,36],"193":[10,35,10,45],"201":[10,1,10,46],"203":[10,1,10,12],"209":[10,1,10,47],"217":[13,1,13,8],"225":[13,13,13,14],"233":[13,13,13,25],"235":[13,13,13,23],"241":[13,1,13,26],"243":[13,1,13,12],"249":[13,1,13,27],"257":[17,1,17,8],"265":[17,13,17,31],"273":[17,13,17,49],"275":[17,13,17,47],"281":[17,1,17,50],"283":[17,1,17,12],"289":[17,1,17,51],"297":[1,1,18,26],"305":[1,1,18,26],"313":[1,1,18,26],"321":[1,1,18,26],"329":[1,1,18,26],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var multiPurposeModule = require('./multi-purpose-module');\n\n// module-function\nconsole.log(multiPurposeModule(\"John\", \"Doe\"));\n// John Doe\n\n\n// // module-class\nvar m = new multiPurposeModule(\"Jane\", \"Doe\");\nconsole.log(m.firstName + \" - \" + m.lastName);\n// Jane - Doe\n\nconsole.log(m.sayHello());\n// Hello, my name is Jane Doe\n\n// // module\nconsole.log(multiPurposeModule.anotherFunction());\n// I am another function!"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(297, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(305, 'multiPurposeModule', multiPurposeModule, 0);
            J$.N(313, 'm', m, 0);
            var multiPurposeModule = J$.X1(41, J$.W(33, 'multiPurposeModule', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, './multi-purpose-module', 21, false)), multiPurposeModule, 3));
            J$.X1(97, J$.M(89, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(81, J$.R(57, 'multiPurposeModule', multiPurposeModule, 1), 0)(J$.T(65, "John", 21, false), J$.T(73, "Doe", 21, false))));
            var m = J$.X1(145, J$.W(137, 'm', J$.F(129, J$.R(105, 'multiPurposeModule', multiPurposeModule, 1), 1)(J$.T(113, "Jane", 21, false), J$.T(121, "Doe", 21, false)), m, 3));
            J$.X1(209, J$.M(201, J$.R(153, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.G(169, J$.R(161, 'm', m, 1), 'firstName', 0), J$.T(177, " - ", 21, false), 0), J$.G(193, J$.R(185, 'm', m, 1), 'lastName', 0), 0)));
            J$.X1(249, J$.M(241, J$.R(217, 'console', console, 2), 'log', 0)(J$.M(233, J$.R(225, 'm', m, 1), 'sayHello', 0)()));
            J$.X1(289, J$.M(281, J$.R(257, 'console', console, 2), 'log', 0)(J$.M(273, J$.R(265, 'multiPurposeModule', multiPurposeModule, 1), 'anotherFunction', 0)()));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
