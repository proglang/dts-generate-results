J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,29],"41":[1,13,1,29],"49":[2,16,2,18],"57":[2,16,2,18],"65":[2,16,2,18],"73":[4,1,4,8],"81":[4,13,4,18],"89":[4,23,4,31],"97":[4,33,4,50],"105":[4,13,4,51],"107":[4,13,4,22],"113":[4,1,4,52],"115":[4,1,4,12],"121":[4,1,4,52],"129":[8,1,8,6],"137":[8,11,8,19],"145":[8,21,8,38],"153":[8,40,8,45],"161":[8,1,8,46],"163":[8,1,8,10],"169":[8,1,8,46],"177":[9,1,9,8],"185":[9,13,9,21],"193":[9,13,9,32],"201":[9,13,9,37],"209":[9,1,9,38],"211":[9,1,9,12],"217":[9,1,9,38],"225":[1,1,11,1],"233":[1,1,11,1],"241":[1,1,11,1],"249":[1,1,11,1],"257":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var field = require('field')\nvar database = {}\n\nconsole.log(field.get(database, 'production.port'))\n// => undefined\n\n// will return undefined since it never existed before\nfield.set(database, 'production.port', 27017)\nconsole.log(database.production.port)\n// => 27017\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'field', field, 0);
            J$.N(241, 'database', database, 0);
            var field = J$.X1(41, J$.W(33, 'field', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'field', 21, false)), field, 3));
            var database = J$.X1(65, J$.W(57, 'database', J$.T(49, {}, 11, false), database, 3));
            J$.X1(121, J$.M(113, J$.R(73, 'console', console, 2), 'log', 0)(J$.M(105, J$.R(81, 'field', field, 1), 'get', 0)(J$.R(89, 'database', database, 1), J$.T(97, 'production.port', 21, false))));
            J$.X1(169, J$.M(161, J$.R(129, 'field', field, 1), 'set', 0)(J$.R(137, 'database', database, 1), J$.T(145, 'production.port', 21, false), J$.T(153, 27017, 22, false)));
            J$.X1(217, J$.M(209, J$.R(177, 'console', console, 2), 'log', 0)(J$.G(201, J$.G(193, J$.R(185, 'database', database, 1), 'production', 0), 'port', 0)));
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
