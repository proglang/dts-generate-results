J$.iids = {"9":[1,17,1,24],"17":[1,25,1,35],"25":[1,17,1,36],"33":[2,21,2,29],"41":[2,17,2,41],"43":[2,21,2,39],"49":[3,17,3,37],"57":[4,17,4,26],"65":[4,36,4,40],"73":[4,17,4,41],"75":[4,17,4,35],"81":[1,17,1,36],"89":[1,17,1,36],"97":[2,17,2,41],"105":[2,17,2,41],"113":[3,17,3,37],"121":[3,17,3,37],"129":[4,17,4,41],"137":[4,17,4,41],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"177":[1,1,5,1],"185":[1,1,5,1],"193":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var showdown  = require('showdown'),\n    converter = new showdown.Converter(),\n    text      = '# hello, markdown!',\n    html      = converter.makeHtml(text);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'showdown', showdown, 0);
            J$.N(161, 'converter', converter, 0);
            J$.N(169, 'text', text, 0);
            J$.N(177, 'html', html, 0);
            var showdown = J$.X1(89, J$.W(81, 'showdown', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'showdown', 21, false)), showdown, 3)), converter = J$.X1(105, J$.W(97, 'converter', J$.M(41, J$.R(33, 'showdown', showdown, 1), 'Converter', 2)(), converter, 3)), text = J$.X1(121, J$.W(113, 'text', J$.T(49, '# hello, markdown!', 21, false), text, 3)), html = J$.X1(137, J$.W(129, 'html', J$.M(73, J$.R(57, 'converter', converter, 1), 'makeHtml', 0)(J$.R(65, 'text', text, 1)), html, 3));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
