J$.iids = {"9":[1,15,1,22],"17":[1,23,1,33],"25":[1,15,1,34],"33":[1,15,1,34],"41":[1,15,1,34],"49":[3,10,5,2],"57":[3,10,5,2],"65":[3,10,5,2],"73":[3,10,5,2],"81":[3,10,5,2],"89":[3,10,5,2],"97":[3,10,5,2],"105":[3,10,5,2],"113":[7,12,7,19],"121":[7,20,7,22],"129":[7,12,7,23],"137":[7,12,7,23],"145":[7,1,7,24],"153":[9,1,9,9],"161":[9,10,9,15],"169":[9,17,9,18],"177":[9,20,9,25],"185":[9,1,9,26],"193":[9,1,9,27],"201":[10,1,10,9],"209":[10,10,10,15],"217":[10,17,10,18],"225":[10,20,10,25],"233":[10,1,10,26],"241":[10,1,10,27],"249":[1,1,11,1],"257":[1,1,11,1],"265":[1,1,11,1],"273":[3,10,5,2],"281":[3,10,5,2],"289":[1,1,11,1],"297":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var memoize = require(\"memoizee\");\n\nvar fn = function(one, two, three) {\n\t/* ... */\n};\n\nmemoized = memoize(fn);\n\nmemoized(\"foo\", 3, \"bar\");\nmemoized(\"foo\", 3, \"bar\"); // Cache hit\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(249, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(257, 'memoize', memoize, 0);
            J$.N(265, 'fn', fn, 0);
            var memoize = J$.X1(41, J$.W(33, 'memoize', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "memoizee", 21, false)), memoize, 3));
            var fn = J$.X1(105, J$.W(97, 'fn', J$.T(89, function (one, two, three) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(49, arguments.callee, this, arguments);
                            arguments = J$.N(57, 'arguments', arguments, 4);
                            one = J$.N(65, 'one', one, 4);
                            two = J$.N(73, 'two', two, 4);
                            three = J$.N(81, 'three', three, 4);
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 49), fn, 3));
            J$.X1(145, memoized = J$.W(137, 'memoized', J$.F(129, J$.R(113, 'memoize', memoize, 1), 0)(J$.R(121, 'fn', fn, 1)), J$.I(typeof memoized === 'undefined' ? undefined : memoized), 4));
            J$.X1(193, J$.F(185, J$.R(153, 'memoized', memoized, 2), 0)(J$.T(161, "foo", 21, false), J$.T(169, 3, 22, false), J$.T(177, "bar", 21, false)));
            J$.X1(241, J$.F(233, J$.R(201, 'memoized', memoized, 2), 0)(J$.T(209, "foo", 21, false), J$.T(217, 3, 22, false), J$.T(225, "bar", 21, false)));
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
