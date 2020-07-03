J$.iids = {"9":[1,17,1,24],"17":[1,25,1,37],"25":[1,17,1,38],"33":[1,17,1,38],"41":[1,17,1,38],"49":[4,20,4,25],"57":[4,33,4,45],"65":[4,13,4,47],"73":[4,3,4,48],"81":[5,20,5,25],"89":[5,33,5,45],"97":[5,13,5,47],"105":[5,3,5,48],"113":[6,20,6,25],"121":[6,33,6,45],"129":[6,13,6,47],"137":[6,3,6,48],"145":[7,20,7,25],"153":[7,33,7,45],"161":[7,13,7,47],"169":[7,3,7,48],"177":[8,20,8,25],"185":[8,33,8,45],"193":[8,13,8,47],"201":[8,3,8,48],"209":[9,20,9,25],"217":[9,33,9,45],"225":[9,13,9,47],"233":[9,3,9,48],"241":[3,13,10,2],"249":[3,13,10,2],"257":[3,13,10,2],"265":[13,14,13,23],"273":[13,24,13,29],"281":[13,32,13,44],"289":[13,46,13,59],"297":[13,31,13,60],"305":[13,14,13,61],"313":[13,14,13,61],"321":[13,14,13,61],"329":[15,1,15,8],"337":[15,13,15,19],"345":[15,1,15,20],"347":[15,1,15,12],"353":[15,1,15,21],"361":[1,1,22,1],"369":[1,1,22,1],"377":[1,1,22,1],"385":[1,1,22,1],"393":[1,1,22,1],"401":[1,1,22,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var arraySort = require('array-sort');\n\nvar posts = [\n  { locals: { foo: 'bbb', date: '2013-05-06' }},\n  { locals: { foo: 'aaa', date: '2012-01-02' }},\n  { locals: { foo: 'ccc', date: '2014-01-02' }},\n  { locals: { foo: 'ccc', date: '2015-01-02' }},\n  { locals: { foo: 'bbb', date: '2014-06-01' }},\n  { locals: { foo: 'aaa', date: '2014-02-02' }},\n];\n\n// sort by `locals.foo`, then `locals.date`\nvar result = arraySort(posts, ['locals.foo', 'locals.date']);\n\nconsole.log(result);\n// [ { locals: { foo: 'aaa', date: '2012-01-02' } },\n//   { locals: { foo: 'aaa', date: '2014-02-02' } },\n//   { locals: { foo: 'bbb', date: '2013-05-06' } },\n//   { locals: { foo: 'bbb', date: '2014-06-01' } },\n//   { locals: { foo: 'ccc', date: '2014-01-02' } },\n//   { locals: { foo: 'ccc', date: '2015-01-02' } } ]\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(361, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(369, 'arraySort', arraySort, 0);
            J$.N(377, 'posts', posts, 0);
            J$.N(385, 'result', result, 0);
            var arraySort = J$.X1(41, J$.W(33, 'arraySort', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'array-sort', 21, false)), arraySort, 3));
            var posts = J$.X1(257, J$.W(249, 'posts', J$.T(241, [
                J$.T(73, {
                    locals: J$.T(65, {
                        foo: J$.T(49, 'bbb', 21, false),
                        date: J$.T(57, '2013-05-06', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(105, {
                    locals: J$.T(97, {
                        foo: J$.T(81, 'aaa', 21, false),
                        date: J$.T(89, '2012-01-02', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(137, {
                    locals: J$.T(129, {
                        foo: J$.T(113, 'ccc', 21, false),
                        date: J$.T(121, '2014-01-02', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(169, {
                    locals: J$.T(161, {
                        foo: J$.T(145, 'ccc', 21, false),
                        date: J$.T(153, '2015-01-02', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(201, {
                    locals: J$.T(193, {
                        foo: J$.T(177, 'bbb', 21, false),
                        date: J$.T(185, '2014-06-01', 21, false)
                    }, 11, false)
                }, 11, false),
                J$.T(233, {
                    locals: J$.T(225, {
                        foo: J$.T(209, 'aaa', 21, false),
                        date: J$.T(217, '2014-02-02', 21, false)
                    }, 11, false)
                }, 11, false)
            ], 10, false), posts, 3));
            var result = J$.X1(321, J$.W(313, 'result', J$.F(305, J$.R(265, 'arraySort', arraySort, 1), 0)(J$.R(273, 'posts', posts, 1), J$.T(297, [
                J$.T(281, 'locals.foo', 21, false),
                J$.T(289, 'locals.date', 21, false)
            ], 10, false)), result, 3));
            J$.X1(353, J$.M(345, J$.R(329, 'console', console, 2), 'log', 0)(J$.R(337, 'result', result, 1)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
