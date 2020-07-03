J$.iids = {"9":[1,11,1,18],"17":[1,19,1,24],"25":[1,11,1,25],"33":[1,11,1,25],"41":[1,11,1,25],"49":[3,1,3,8],"57":[3,13,3,16],"65":[3,17,3,23],"73":[3,13,3,24],"81":[3,1,3,25],"83":[3,1,3,12],"89":[3,1,3,26],"97":[6,1,6,8],"105":[6,13,6,16],"113":[6,17,6,22],"121":[6,13,6,23],"129":[6,1,6,24],"131":[6,1,6,12],"137":[6,1,6,25],"145":[9,1,9,8],"153":[9,13,9,16],"161":[9,17,9,24],"169":[9,13,9,25],"177":[9,1,9,26],"179":[9,1,9,12],"185":[9,1,9,27],"193":[1,1,11,1],"201":[1,1,11,1],"209":[1,1,11,1],"217":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var abs = require(\"abs\");\n\nconsole.log(abs(\"/foo\"));\n// => \"/foo\"\n\nconsole.log(abs(\"foo\"));\n// => \"/path/to/where/you/are/foo\"\n\nconsole.log(abs(\"~/foo\"));\n// => \"/home/username/foo\"\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'abs', abs, 0);
            var abs = J$.X1(41, J$.W(33, 'abs', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "abs", 21, false)), abs, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(73, J$.R(57, 'abs', abs, 1), 0)(J$.T(65, "/foo", 21, false))));
            J$.X1(137, J$.M(129, J$.R(97, 'console', console, 2), 'log', 0)(J$.F(121, J$.R(105, 'abs', abs, 1), 0)(J$.T(113, "foo", 21, false))));
            J$.X1(185, J$.M(177, J$.R(145, 'console', console, 2), 'log', 0)(J$.F(169, J$.R(153, 'abs', abs, 1), 0)(J$.T(161, "~/foo", 21, false))));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
