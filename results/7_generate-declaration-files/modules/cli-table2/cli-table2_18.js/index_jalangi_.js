J$.iids = {"9":[1,13,1,20],"17":[1,21,1,33],"25":[1,13,1,34],"33":[1,13,1,34],"41":[1,13,1,34],"49":[2,17,2,22],"57":[2,13,2,24],"65":[2,13,2,24],"73":[2,13,2,24],"81":[4,1,4,6],"89":[5,19,5,31],"97":[5,5,5,33],"105":[6,22,6,37],"113":[6,5,6,39],"121":[4,1,7,2],"123":[4,1,4,11],"129":[4,1,7,3],"137":[9,1,9,8],"145":[9,13,9,18],"153":[9,13,9,29],"155":[9,13,9,27],"161":[9,1,9,30],"163":[9,1,9,12],"169":[9,1,9,31],"177":[1,1,10,1],"185":[1,1,10,1],"193":[1,1,10,1],"201":[1,1,10,1],"209":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Table = require('cli-table2');\nvar table = new Table();\n\ntable.push(\n    { 'Some key': 'Some value' }\n  , { 'Another key': 'Another value' }\n);\n\nconsole.log(table.toString());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'Table', Table, 0);
            J$.N(193, 'table', table, 0);
            var Table = J$.X1(41, J$.W(33, 'Table', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'cli-table2', 21, false)), Table, 3));
            var table = J$.X1(73, J$.W(65, 'table', J$.F(57, J$.R(49, 'Table', Table, 1), 1)(), table, 3));
            J$.X1(129, J$.M(121, J$.R(81, 'table', table, 1), 'push', 0)(J$.T(97, {
                'Some key': J$.T(89, 'Some value', 21, false)
            }, 11, false), J$.T(113, {
                'Another key': J$.T(105, 'Another value', 21, false)
            }, 11, false)));
            J$.X1(169, J$.M(161, J$.R(137, 'console', console, 2), 'log', 0)(J$.M(153, J$.R(145, 'table', table, 1), 'toString', 0)()));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
