J$.iids = {"9":[1,14,1,21],"17":[1,22,1,33],"25":[1,14,1,34],"33":[1,14,1,34],"41":[1,14,1,34],"49":[2,11,2,17],"57":[2,18,2,41],"65":[2,43,2,45],"73":[2,47,2,53],"81":[2,11,2,54],"89":[2,11,2,54],"97":[2,11,2,54],"105":[3,1,3,8],"113":[3,13,3,16],"121":[3,1,3,17],"123":[3,1,3,12],"129":[3,1,3,18],"137":[1,1,4,1],"145":[1,1,4,1],"153":[1,1,4,1],"161":[1,1,4,1],"169":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var format = require('pg-format');\nvar sql = format('SELECT %1$L, %1$L, %L', 34, 'test');\nconsole.log(sql); // SELECT '34', '34', 'test'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'format', format, 0);
            J$.N(153, 'sql', sql, 0);
            var format = J$.X1(41, J$.W(33, 'format', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'pg-format', 21, false)), format, 3));
            var sql = J$.X1(97, J$.W(89, 'sql', J$.F(81, J$.R(49, 'format', format, 1), 0)(J$.T(57, 'SELECT %1$L, %1$L, %L', 21, false), J$.T(65, 34, 22, false), J$.T(73, 'test', 21, false)), sql, 3));
            J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.R(113, 'sql', sql, 1)));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
