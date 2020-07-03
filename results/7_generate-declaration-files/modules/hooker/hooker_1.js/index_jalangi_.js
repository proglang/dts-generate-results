J$.iids = {"9":[1,14,1,21],"10":[3,15,3,53],"17":[1,22,1,30],"25":[1,14,1,31],"33":[1,14,1,31],"41":[1,14,1,31],"49":[2,1,2,7],"57":[2,13,2,17],"65":[2,19,2,24],"73":[3,3,3,10],"81":[3,15,3,24],"89":[3,15,3,31],"97":[3,34,3,53],"105":[3,3,3,54],"107":[3,3,3,14],"113":[3,3,3,55],"121":[2,26,4,2],"129":[2,26,4,2],"137":[2,26,4,2],"145":[2,1,4,3],"147":[2,1,2,12],"153":[2,1,4,4],"161":[5,1,5,5],"169":[5,10,5,11],"177":[5,13,5,14],"185":[5,16,5,17],"193":[5,1,5,18],"195":[5,1,5,9],"201":[5,1,5,18],"209":[1,1,6,1],"217":[1,1,6,1],"225":[2,26,4,2],"233":[2,26,4,2],"241":[1,1,6,1],"249":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var hooker = require('hooker');\nhooker.hook(Math, \"max\", function() {\n  console.log(arguments.length + \" arguments passed\");\n});\nMath.max(5, 6, 7) // logs: \"3 arguments passed\", returns 7\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'hooker', hooker, 0);
            var hooker = J$.X1(41, J$.W(33, 'hooker', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'hooker', 21, false)), hooker, 3));
            J$.X1(153, J$.M(145, J$.R(49, 'hooker', hooker, 1), 'hook', 0)(J$.R(57, 'Math', Math, 2), J$.T(65, "max", 21, false), J$.T(137, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            J$.X1(113, J$.M(105, J$.R(73, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.G(89, J$.R(81, 'arguments', arguments, 2), 'length', 0), J$.T(97, " arguments passed", 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121)));
            J$.X1(201, J$.M(193, J$.R(161, 'Math', Math, 2), 'max', 0)(J$.T(169, 5, 22, false), J$.T(177, 6, 22, false), J$.T(185, 7, 22, false)));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
