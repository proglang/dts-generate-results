J$.iids = {"9":[1,23,1,30],"17":[1,31,1,49],"25":[1,23,1,50],"33":[1,23,1,50],"41":[1,23,1,50],"49":[4,8,4,13],"57":[5,12,5,22],"65":[6,10,6,19],"73":[7,15,7,19],"81":[7,25,7,35],"89":[7,10,7,36],"97":[3,16,8,2],"105":[3,16,8,2],"113":[3,16,8,2],"121":[9,25,9,40],"129":[9,41,9,49],"137":[9,52,9,58],"145":[9,60,9,65],"153":[9,67,9,71],"161":[9,51,9,72],"169":[9,74,9,79],"177":[9,25,9,80],"185":[9,25,9,80],"193":[9,25,9,80],"201":[11,30,11,45],"209":[11,46,11,54],"217":[11,57,11,63],"225":[11,65,11,70],"233":[11,72,11,76],"241":[11,56,11,77],"249":[11,79,11,83],"257":[11,30,11,84],"265":[11,30,11,84],"273":[11,30,11,84],"281":[1,1,13,1],"289":[1,1,13,1],"297":[1,1,13,1],"305":[1,1,13,1],"313":[1,1,13,1],"321":[1,1,13,1],"329":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var whiteListObject = require(\"whitelist-object\");\n\nvar myObject = {\n\tcool: \"guy\",\n    conor: \"hastings\",\n    wow: \"so cool\",\n    but: {is: \"he\", no: \"he isn't\"}\n};\nvar whiteListedObject = whiteListObject(myObject, [\"cool\", \"but\", \"is\"], false);\n//returns {cool: \"guy\", but: {is: \"he\"}};\nvar shallowWhiteListObject = whiteListObject(myObject, [\"cool\", \"but\", \"is\"], true);\n//returns {cool: \"guy\", but: {is: \"he\", no: \"he isn't\"}};\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'whiteListObject', whiteListObject, 0);
            J$.N(297, 'myObject', myObject, 0);
            J$.N(305, 'whiteListedObject', whiteListedObject, 0);
            J$.N(313, 'shallowWhiteListObject', shallowWhiteListObject, 0);
            var whiteListObject = J$.X1(41, J$.W(33, 'whiteListObject', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "whitelist-object", 21, false)), whiteListObject, 3));
            var myObject = J$.X1(113, J$.W(105, 'myObject', J$.T(97, {
                cool: J$.T(49, "guy", 21, false),
                conor: J$.T(57, "hastings", 21, false),
                wow: J$.T(65, "so cool", 21, false),
                but: J$.T(89, {
                    is: J$.T(73, "he", 21, false),
                    no: J$.T(81, "he isn't", 21, false)
                }, 11, false)
            }, 11, false), myObject, 3));
            var whiteListedObject = J$.X1(193, J$.W(185, 'whiteListedObject', J$.F(177, J$.R(121, 'whiteListObject', whiteListObject, 1), 0)(J$.R(129, 'myObject', myObject, 1), J$.T(161, [
                J$.T(137, "cool", 21, false),
                J$.T(145, "but", 21, false),
                J$.T(153, "is", 21, false)
            ], 10, false), J$.T(169, false, 23, false)), whiteListedObject, 3));
            var shallowWhiteListObject = J$.X1(273, J$.W(265, 'shallowWhiteListObject', J$.F(257, J$.R(201, 'whiteListObject', whiteListObject, 1), 0)(J$.R(209, 'myObject', myObject, 1), J$.T(241, [
                J$.T(217, "cool", 21, false),
                J$.T(225, "but", 21, false),
                J$.T(233, "is", 21, false)
            ], 10, false), J$.T(249, true, 23, false)), shallowWhiteListObject, 3));
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
