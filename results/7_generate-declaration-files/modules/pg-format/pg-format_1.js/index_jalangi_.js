J$.iids = {"9":[1,14,1,21],"17":[1,22,1,33],"25":[1,14,1,34],"33":[1,14,1,34],"41":[1,14,1,34],"49":[2,11,2,17],"57":[2,18,2,57],"65":[2,59,2,69],"73":[2,71,2,73],"81":[2,75,2,85],"89":[2,11,2,86],"97":[2,11,2,86],"105":[2,11,2,86],"113":[3,1,3,8],"121":[3,13,3,16],"129":[3,1,3,17],"131":[3,1,3,12],"137":[3,1,3,18],"145":[1,1,4,1],"153":[1,1,4,1],"161":[1,1,4,1],"169":[1,1,4,1],"177":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var format = require('pg-format');\nvar sql = format('SELECT * FROM %I WHERE my_col = %L %s', 'my_table', 34, 'LIMIT 10');\nconsole.log(sql); // SELECT * FROM my_table WHERE my_col = '34' LIMIT 10\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'format', format, 0);
            J$.N(161, 'sql', sql, 0);
            var format = J$.X1(41, J$.W(33, 'format', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'pg-format', 21, false)), format, 3));
            var sql = J$.X1(105, J$.W(97, 'sql', J$.F(89, J$.R(49, 'format', format, 1), 0)(J$.T(57, 'SELECT * FROM %I WHERE my_col = %L %s', 21, false), J$.T(65, 'my_table', 21, false), J$.T(73, 34, 22, false), J$.T(81, 'LIMIT 10', 21, false)), sql, 3));
            J$.X1(137, J$.M(129, J$.R(113, 'console', console, 2), 'log', 0)(J$.R(121, 'sql', sql, 1)));
        } catch (J$e) {
            J$.Ex(169, J$e);
        } finally {
            if (J$.Sr(177)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
