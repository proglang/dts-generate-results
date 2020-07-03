J$.iids = {"9":[1,18,1,25],"10":[3,13,3,73],"17":[1,26,1,44],"18":[3,13,3,79],"25":[1,18,1,45],"33":[1,18,1,45],"41":[1,1,1,45],"49":[3,1,3,8],"57":[3,13,3,16],"65":[3,19,3,33],"73":[3,34,3,72],"81":[3,19,3,73],"89":[3,76,3,79],"97":[3,1,3,80],"99":[3,1,3,12],"105":[3,1,3,80],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"jsStringEscape = require('js-string-escape')\n\nconsole.log('\"' + jsStringEscape('Quotes (\\\", \\'), newlines (\\n), etc.') + '\"')\n// => \"Quotes (\\\", \\'), newlines (\\n), etc.\"\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.X1(41, jsStringEscape = J$.W(33, 'jsStringEscape', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'js-string-escape', 21, false)), J$.I(typeof jsStringEscape === 'undefined' ? undefined : jsStringEscape), 4));
            J$.X1(105, J$.M(97, J$.R(49, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(57, '"', 21, false), J$.F(81, J$.R(65, 'jsStringEscape', jsStringEscape, 2), 0)(J$.T(73, 'Quotes (\", \'), newlines (\n), etc.', 21, false)), 0), J$.T(89, '"', 21, false), 0)));
        } catch (J$e) {
            J$.Ex(121, J$e);
        } finally {
            if (J$.Sr(129)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
