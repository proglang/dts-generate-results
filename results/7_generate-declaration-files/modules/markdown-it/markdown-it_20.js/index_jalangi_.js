J$.iids = {"9":[2,10,2,17],"17":[2,18,2,31],"25":[2,10,2,32],"33":[2,33,2,45],"41":[2,10,2,46],"49":[2,10,2,46],"57":[2,10,2,46],"65":[5,10,5,17],"73":[5,18,5,31],"81":[5,10,5,32],"89":[5,10,5,34],"97":[5,10,5,34],"105":[5,10,5,34],"113":[8,10,8,17],"121":[8,18,8,31],"129":[8,10,8,32],"137":[9,9,9,13],"145":[10,12,10,16],"153":[11,16,11,20],"161":[8,33,12,2],"169":[8,10,12,3],"177":[8,10,12,3],"185":[8,10,12,3],"193":[15,10,15,17],"201":[15,18,15,31],"209":[15,10,15,32],"217":[16,17,16,22],"225":[17,17,17,22],"233":[19,17,19,22],"241":[20,17,20,28],"249":[22,17,22,22],"257":[25,17,25,22],"265":[32,11,32,17],"273":[37,48,37,50],"281":[37,48,37,50],"289":[37,41,37,51],"297":[37,14,37,53],"305":[37,14,37,53],"313":[37,14,37,53],"321":[15,33,38,2],"329":[15,10,38,3],"337":[15,10,38,3],"345":[15,10,38,3],"353":[1,1,39,1],"361":[1,1,39,1],"369":[37,14,37,53],"377":[37,14,37,53],"385":[1,1,39,1],"393":[1,1,39,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// commonmark mode\nvar md = require('markdown-it')('commonmark');\n\n// default mode\nvar md = require('markdown-it')();\n\n// enable everything\nvar md = require('markdown-it')({\n  html: true,\n  linkify: true,\n  typographer: true\n});\n\n// full options list (defaults)\nvar md = require('markdown-it')({\n  html:         false,        // Enable HTML tags in source\n  xhtmlOut:     false,        // Use '/' to close single tags (<br />).\n                              // This is only for full CommonMark compatibility.\n  breaks:       false,        // Convert '\\n' in paragraphs into <br>\n  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be\n                              // useful for external highlighters.\n  linkify:      false,        // Autoconvert URL-like text to links\n\n  // Enable some language-neutral replacement + quotes beautification\n  typographer:  false,\n\n  // Double + single quotes replacement pairs, when typographer enabled,\n  // and smartquotes on. Could be either a String or an Array.\n  //\n  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,\n  // and ['«\\xA0', '\\xA0»', '‹\\xA0', '\\xA0›'] for French (including nbsp).\n  quotes: '“”‘’',\n\n  // Highlighter function. Should return escaped HTML,\n  // or '' if the source string is not changed and should be escaped externally.\n  // If result starts with <pre... internal wrapper is skipped.\n  highlight: function (/*str, lang*/) { return ''; }\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(353, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(361, 'md', md, 0);
            var md = J$.X1(57, J$.W(49, 'md', J$.F(41, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'markdown-it', 21, false)), 0)(J$.T(33, 'commonmark', 21, false)), md, 3));
            var md = J$.X1(105, J$.W(97, 'md', J$.F(89, J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, 'markdown-it', 21, false)), 0)(), md, 3));
            var md = J$.X1(185, J$.W(177, 'md', J$.F(169, J$.F(129, J$.R(113, 'require', require, 2), 0)(J$.T(121, 'markdown-it', 21, false)), 0)(J$.T(161, {
                html: J$.T(137, true, 23, false),
                linkify: J$.T(145, true, 23, false),
                typographer: J$.T(153, true, 23, false)
            }, 11, false)), md, 3));
            var md = J$.X1(345, J$.W(337, 'md', J$.F(329, J$.F(209, J$.R(193, 'require', require, 2), 0)(J$.T(201, 'markdown-it', 21, false)), 0)(J$.T(321, {
                html: J$.T(217, false, 23, false),
                xhtmlOut: J$.T(225, false, 23, false),
                breaks: J$.T(233, false, 23, false),
                langPrefix: J$.T(241, 'language-', 21, false),
                linkify: J$.T(249, false, 23, false),
                typographer: J$.T(257, false, 23, false),
                quotes: J$.T(265, '“”‘’', 21, false),
                highlight: J$.T(313, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(297, arguments.callee, this, arguments);
                                arguments = J$.N(305, 'arguments', arguments, 4);
                                return J$.X1(289, J$.Rt(281, J$.T(273, '', 21, false)));
                            } catch (J$e) {
                                J$.Ex(369, J$e);
                            } finally {
                                if (J$.Fr(377))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 297)
            }, 11, false)), md, 3));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
