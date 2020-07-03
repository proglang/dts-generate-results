J$.iids = {"9":[1,13,1,20],"10":[4,3,5,90],"17":[1,21,1,40],"18":[4,3,6,77],"25":[1,13,1,41],"33":[1,13,1,41],"41":[1,13,1,41],"49":[4,3,4,79],"57":[5,3,5,90],"65":[6,3,6,77],"73":[4,3,6,77],"81":[4,3,6,77],"89":[8,14,8,19],"97":[8,20,8,30],"105":[8,14,8,31],"113":[8,14,8,31],"121":[8,14,8,31],"129":[9,1,9,8],"137":[9,13,9,19],"145":[9,1,9,20],"147":[9,1,9,12],"153":[9,1,9,21],"161":[1,1,10,1],"169":[1,1,10,1],"177":[1,1,10,1],"185":[1,1,10,1],"193":[1,1,10,1],"201":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parse = require('parse-link-header');\n\nvar linkHeader =\n  '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel=\"next\", ' +\n  '<https://api.github.com/user/9287/repos?page=1&per_page=100>; rel=\"prev\"; pet=\"cat\", ' +\n  '<https://api.github.com/user/9287/repos?page=5&per_page=100>; rel=\"last\"'\n\nvar parsed = parse(linkHeader);\nconsole.log(parsed);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(169, 'parse', parse, 0);
            J$.N(177, 'linkHeader', linkHeader, 0);
            J$.N(185, 'parsed', parsed, 0);
            var parse = J$.X1(41, J$.W(33, 'parse', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'parse-link-header', 21, false)), parse, 3));
            var linkHeader = J$.X1(81, J$.W(73, 'linkHeader', J$.B(18, '+', J$.B(10, '+', J$.T(49, '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel="next", ', 21, false), J$.T(57, '<https://api.github.com/user/9287/repos?page=1&per_page=100>; rel="prev"; pet="cat", ', 21, false), 0), J$.T(65, '<https://api.github.com/user/9287/repos?page=5&per_page=100>; rel="last"', 21, false), 0), linkHeader, 3));
            var parsed = J$.X1(121, J$.W(113, 'parsed', J$.F(105, J$.R(89, 'parse', parse, 1), 0)(J$.R(97, 'linkHeader', linkHeader, 1)), parsed, 3));
            J$.X1(153, J$.M(145, J$.R(129, 'console', console, 2), 'log', 0)(J$.R(137, 'parsed', parsed, 1)));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
