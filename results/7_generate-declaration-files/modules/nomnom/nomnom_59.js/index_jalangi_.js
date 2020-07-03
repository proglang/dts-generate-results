J$.iids = {"9":[1,12,1,19],"17":[1,20,1,28],"25":[1,12,1,29],"33":[2,12,2,22],"41":[1,12,2,23],"43":[1,12,2,11],"49":[5,20,5,21],"57":[6,16,6,34],"65":[7,16,7,20],"73":[4,13,8,8],"81":[10,16,10,19],"89":[11,19,11,25],"97":[12,16,12,47],"105":[9,15,13,8],"113":[15,16,15,19],"121":[16,16,16,20],"129":[17,16,17,38],"137":[14,14,18,8],"145":[3,13,19,5],"153":[1,12,19,6],"155":[1,12,3,12],"161":[1,12,19,14],"163":[1,12,19,12],"169":[1,12,19,14],"177":[1,12,19,14],"185":[1,1,20,1],"193":[1,1,20,1],"201":[1,1,20,1],"209":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var opts = require(\"nomnom\")\n   .script(\"runtests\")\n   .options({\n      path: {\n         position: 0,\n         help: \"Test file to run\",\n         list: true\n      },\n      config: {\n         abbr: 'c',\n         metavar: 'FILE',\n         help: \"Config file with tests to run\"\n      },\n      debug: {\n         abbr: 'd',\n         flag: true,\n         help: \"Print debugging info\"\n      }\n   }).parse();\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'opts', opts, 0);
            var opts = J$.X1(177, J$.W(169, 'opts', J$.M(161, J$.M(153, J$.M(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "nomnom", 21, false)), 'script', 0)(J$.T(33, "runtests", 21, false)), 'options', 0)(J$.T(145, {
                path: J$.T(73, {
                    position: J$.T(49, 0, 22, false),
                    help: J$.T(57, "Test file to run", 21, false),
                    list: J$.T(65, true, 23, false)
                }, 11, false),
                config: J$.T(105, {
                    abbr: J$.T(81, 'c', 21, false),
                    metavar: J$.T(89, 'FILE', 21, false),
                    help: J$.T(97, "Config file with tests to run", 21, false)
                }, 11, false),
                debug: J$.T(137, {
                    abbr: J$.T(113, 'd', 21, false),
                    flag: J$.T(121, true, 23, false),
                    help: J$.T(129, "Print debugging info", 21, false)
                }, 11, false)
            }, 11, false)), 'parse', 0)(), opts, 3));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
