J$.iids = {"9":[1,13,1,20],"17":[1,21,1,33],"25":[1,13,1,34],"33":[1,13,1,34],"41":[1,13,1,34],"49":[2,17,2,22],"57":[2,32,2,34],"65":[2,36,2,50],"73":[2,52,2,66],"81":[2,31,2,67],"89":[2,23,2,69],"97":[2,13,2,70],"105":[2,13,2,70],"113":[2,13,2,70],"121":[4,1,4,6],"129":[5,25,5,44],"137":[5,46,5,65],"145":[5,24,5,66],"153":[5,5,5,68],"161":[6,25,6,44],"169":[6,46,6,65],"177":[6,24,6,66],"185":[6,5,6,68],"193":[4,1,7,2],"195":[4,1,4,11],"201":[4,1,7,3],"209":[9,1,9,8],"217":[9,13,9,18],"225":[9,13,9,29],"227":[9,13,9,27],"233":[9,1,9,30],"235":[9,1,9,12],"241":[9,1,9,31],"249":[1,1,10,1],"257":[1,1,10,1],"265":[1,1,10,1],"273":[1,1,10,1],"281":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Table = require('cli-table2');\nvar table = new Table({ head: [\"\", \"Top Header 1\", \"Top Header 2\"] });\n\ntable.push(\n    { 'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] }\n  , { 'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] }\n);\n\nconsole.log(table.toString());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(249, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(257, 'Table', Table, 0);
            J$.N(265, 'table', table, 0);
            var Table = J$.X1(41, J$.W(33, 'Table', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'cli-table2', 21, false)), Table, 3));
            var table = J$.X1(113, J$.W(105, 'table', J$.F(97, J$.R(49, 'Table', Table, 1), 1)(J$.T(89, {
                head: J$.T(81, [
                    J$.T(57, "", 21, false),
                    J$.T(65, "Top Header 1", 21, false),
                    J$.T(73, "Top Header 2", 21, false)
                ], 10, false)
            }, 11, false)), table, 3));
            J$.X1(201, J$.M(193, J$.R(121, 'table', table, 1), 'push', 0)(J$.T(153, {
                'Left Header 1': J$.T(145, [
                    J$.T(129, 'Value Row 1 Col 1', 21, false),
                    J$.T(137, 'Value Row 1 Col 2', 21, false)
                ], 10, false)
            }, 11, false), J$.T(185, {
                'Left Header 2': J$.T(177, [
                    J$.T(161, 'Value Row 2 Col 1', 21, false),
                    J$.T(169, 'Value Row 2 Col 2', 21, false)
                ], 10, false)
            }, 11, false)));
            J$.X1(241, J$.M(233, J$.R(209, 'console', console, 2), 'log', 0)(J$.M(225, J$.R(217, 'table', table, 1), 'toString', 0)()));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
