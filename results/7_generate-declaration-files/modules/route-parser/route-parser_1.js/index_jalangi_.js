J$.iids = {"9":[1,9,1,16],"17":[1,17,1,31],"25":[1,9,1,32],"33":[1,9,1,32],"41":[1,1,1,33],"49":[2,17,2,22],"57":[2,23,2,51],"65":[2,13,2,52],"73":[2,13,2,52],"81":[2,13,2,52],"89":[3,1,3,6],"97":[3,13,3,37],"105":[3,1,3,38],"107":[3,1,3,12],"113":[3,1,3,38],"121":[4,1,4,6],"129":[4,22,4,23],"137":[4,15,4,24],"145":[4,1,4,25],"147":[4,1,4,14],"153":[4,1,4,25],"161":[1,1,5,1],"169":[1,1,5,1],"177":[1,1,5,1],"185":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"Route = require('route-parser');\nvar route = new Route('/my/fancy/route/page/:page');\nroute.match('/my/fancy/route/page/7') // { page: 7 }\nroute.reverse({page: 3}) // -> '/my/fancy/route/page/3'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(169, 'route', route, 0);
            J$.X1(41, Route = J$.W(33, 'Route', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'route-parser', 21, false)), J$.I(typeof Route === 'undefined' ? undefined : Route), 4));
            var route = J$.X1(81, J$.W(73, 'route', J$.F(65, J$.R(49, 'Route', Route, 2), 1)(J$.T(57, '/my/fancy/route/page/:page', 21, false)), route, 3));
            J$.X1(113, J$.M(105, J$.R(89, 'route', route, 1), 'match', 0)(J$.T(97, '/my/fancy/route/page/7', 21, false)));
            J$.X1(153, J$.M(145, J$.R(121, 'route', route, 1), 'reverse', 0)(J$.T(137, {
                page: J$.T(129, 3, 22, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
