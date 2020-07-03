J$.iids = {"9":[1,12,1,19],"17":[1,20,1,28],"25":[1,12,1,29],"33":[1,12,1,37],"35":[1,12,1,35],"41":[1,12,1,37],"49":[1,12,1,37],"57":[3,11,3,15],"65":[3,16,3,17],"73":[3,11,3,18],"81":[3,11,3,18],"89":[3,11,3,18],"97":[4,12,4,16],"105":[4,12,4,21],"113":[4,12,4,21],"121":[4,12,4,21],"129":[5,15,5,19],"137":[5,15,5,21],"145":[5,15,5,21],"153":[5,15,5,21],"161":[6,14,6,18],"169":[6,14,6,20],"177":[6,14,6,20],"185":[6,14,6,20],"193":[1,1,7,1],"201":[1,1,7,1],"209":[1,1,7,1],"217":[1,1,7,1],"225":[1,1,7,1],"233":[1,1,7,1],"241":[1,1,7,1],"249":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var opts = require(\"nomnom\").parse();\n\nvar url = opts[0];     // get the first positional arg\nvar file = opts.file   // see if --file was specified\nvar verbose = opts.v   // see if -v was specified\nvar extras = opts._    // get an array of the unmatched, positional args\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'opts', opts, 0);
            J$.N(209, 'url', url, 0);
            J$.N(217, 'file', file, 0);
            J$.N(225, 'verbose', verbose, 0);
            J$.N(233, 'extras', extras, 0);
            var opts = J$.X1(49, J$.W(41, 'opts', J$.M(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "nomnom", 21, false)), 'parse', 0)(), opts, 3));
            var url = J$.X1(89, J$.W(81, 'url', J$.G(73, J$.R(57, 'opts', opts, 1), J$.T(65, 0, 22, false), 4), url, 3));
            var file = J$.X1(121, J$.W(113, 'file', J$.G(105, J$.R(97, 'opts', opts, 1), 'file', 0), file, 3));
            var verbose = J$.X1(153, J$.W(145, 'verbose', J$.G(137, J$.R(129, 'opts', opts, 1), 'v', 0), verbose, 3));
            var extras = J$.X1(185, J$.W(177, 'extras', J$.G(169, J$.R(161, 'opts', opts, 1), '_', 0), extras, 3));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
