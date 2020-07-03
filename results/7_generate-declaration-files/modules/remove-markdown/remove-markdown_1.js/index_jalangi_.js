J$.iids = {"9":[1,16,1,23],"17":[1,24,1,41],"25":[1,16,1,42],"33":[1,16,1,42],"41":[1,16,1,42],"49":[2,16,2,105],"57":[2,16,2,105],"65":[2,16,2,105],"73":[3,17,3,25],"81":[3,26,3,34],"89":[3,17,3,35],"97":[3,17,3,35],"105":[3,17,3,35],"113":[1,1,4,1],"121":[1,1,4,1],"129":[1,1,4,1],"137":[1,1,4,1],"145":[1,1,4,1],"153":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var removeMd = require('remove-markdown');\nvar markdown = '# This is a heading\\n\\nThis is a paragraph with [a link](http://www.disney.com/) in it.';\nvar plainText = removeMd(markdown); // plainText is now 'This is a heading\\n\\nThis is a paragraph with a link in it.'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'removeMd', removeMd, 0);
            J$.N(129, 'markdown', markdown, 0);
            J$.N(137, 'plainText', plainText, 0);
            var removeMd = J$.X1(41, J$.W(33, 'removeMd', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'remove-markdown', 21, false)), removeMd, 3));
            var markdown = J$.X1(65, J$.W(57, 'markdown', J$.T(49, '# This is a heading\n\nThis is a paragraph with [a link](http://www.disney.com/) in it.', 21, false), markdown, 3));
            var plainText = J$.X1(105, J$.W(97, 'plainText', J$.F(89, J$.R(73, 'removeMd', removeMd, 1), 0)(J$.R(81, 'markdown', markdown, 1)), plainText, 3));
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
