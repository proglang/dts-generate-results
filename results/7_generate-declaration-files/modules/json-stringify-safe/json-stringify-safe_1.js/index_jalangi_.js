J$.iids = {"9":[1,17,1,24],"17":[1,25,1,46],"25":[1,17,1,47],"33":[1,17,1,47],"41":[1,17,1,47],"49":[2,19,2,21],"57":[2,19,2,21],"65":[2,19,2,21],"73":[3,1,3,12],"81":[3,27,3,38],"89":[3,1,3,38],"97":[3,1,3,39],"105":[4,1,4,12],"113":[4,22,4,33],"121":[4,35,4,46],"129":[4,20,4,48],"137":[4,1,4,48],"145":[4,1,4,49],"153":[5,1,5,8],"161":[5,13,5,22],"169":[5,23,5,34],"177":[5,36,5,40],"185":[5,42,5,43],"193":[5,13,5,44],"201":[5,1,5,45],"203":[5,1,5,12],"209":[5,1,5,46],"217":[1,1,6,1],"225":[1,1,6,1],"233":[1,1,6,1],"241":[1,1,6,1],"249":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var stringify = require('json-stringify-safe');\nvar circularObj = {};\ncircularObj.circularRef = circularObj;\ncircularObj.list = [ circularObj, circularObj ];\nconsole.log(stringify(circularObj, null, 2));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(217, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(225, 'stringify', stringify, 0);
            J$.N(233, 'circularObj', circularObj, 0);
            var stringify = J$.X1(41, J$.W(33, 'stringify', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'json-stringify-safe', 21, false)), stringify, 3));
            var circularObj = J$.X1(65, J$.W(57, 'circularObj', J$.T(49, {}, 11, false), circularObj, 3));
            J$.X1(97, J$.P(89, J$.R(73, 'circularObj', circularObj, 1), 'circularRef', J$.R(81, 'circularObj', circularObj, 1), 0));
            J$.X1(145, J$.P(137, J$.R(105, 'circularObj', circularObj, 1), 'list', J$.T(129, [
                J$.R(113, 'circularObj', circularObj, 1),
                J$.R(121, 'circularObj', circularObj, 1)
            ], 10, false), 0));
            J$.X1(209, J$.M(201, J$.R(153, 'console', console, 2), 'log', 0)(J$.F(193, J$.R(161, 'stringify', stringify, 1), 0)(J$.R(169, 'circularObj', circularObj, 1), J$.T(177, null, 25, false), J$.T(185, 2, 22, false))));
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
