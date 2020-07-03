J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[4,11,4,17],"57":[4,35,4,47],"65":[4,27,4,49],"73":[4,3,4,51],"81":[5,11,5,17],"89":[5,35,5,47],"97":[5,27,5,49],"105":[5,3,5,51],"113":[6,11,6,17],"121":[6,35,6,47],"129":[6,27,6,49],"137":[6,3,6,51],"145":[3,13,7,2],"153":[3,13,7,2],"161":[3,13,7,2],"169":[10,1,10,8],"177":[10,13,10,22],"185":[10,23,10,28],"193":[10,30,10,43],"201":[10,13,10,44],"209":[10,1,10,45],"211":[10,1,10,12],"217":[10,1,10,46],"225":[13,1,13,8],"233":[13,13,13,22],"241":[13,23,13,28],"249":[13,30,13,36],"257":[13,13,13,37],"265":[13,1,13,38],"267":[13,1,13,12],"273":[13,1,13,39],"281":[1,1,14,1],"289":[1,1,14,1],"297":[1,1,14,1],"305":[1,1,14,1],"313":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var arraySort = require('array-sort');\n\nvar posts = [\n  { path: 'c.md', locals: { date: '2014-01-09' } },\n  { path: 'a.md', locals: { date: '2014-01-02' } },\n  { path: 'b.md', locals: { date: '2013-05-06' } },\n];\n\n// sort by `locals.date`\nconsole.log(arraySort(posts, 'locals.date'));\n\n// sort by `path`\nconsole.log(arraySort(posts, 'path'));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'arraySort', arraySort, 0);
            J$.N(297, 'posts', posts, 0);
            var arraySort = J$.X1(41, J$.W(33, 'arraySort', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'array-sort', 21, false)), arraySort, 3));
            var posts = J$.X1(161, J$.W(153, 'posts', J$.T(145, [
                J$.T(73, {
                    path: J$.T(49, 'c.md', 21, false),
                    locals: J$.T(65, {
                        date: J$.T(57, '2014-01-09', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(105, {
                    path: J$.T(81, 'a.md', 21, false),
                    locals: J$.T(97, {
                        date: J$.T(89, '2014-01-02', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(137, {
                    path: J$.T(113, 'b.md', 21, false),
                    locals: J$.T(129, {
                        date: J$.T(121, '2013-05-06', 21, false)
                    }, 11, false)
                }, 11, false)
            ], 10, false), posts, 3));
            J$.X1(217, J$.M(209, J$.R(169, 'console', console, 2), 'log', 0)(J$.F(201, J$.R(177, 'arraySort', arraySort, 1), 0)(J$.R(185, 'posts', posts, 1), J$.T(193, 'locals.date', 21, false))));
            J$.X1(273, J$.M(265, J$.R(225, 'console', console, 2), 'log', 0)(J$.F(257, J$.R(233, 'arraySort', arraySort, 1), 0)(J$.R(241, 'posts', posts, 1), J$.T(249, 'path', 21, false))));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
