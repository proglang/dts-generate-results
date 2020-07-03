J$.iids = {"9":[1,14,1,21],"17":[1,22,1,36],"25":[1,14,1,37],"33":[1,14,1,37],"41":[1,14,1,37],"49":[3,14,3,20],"57":[4,3,4,9],"65":[4,20,4,31],"73":[4,3,4,32],"75":[4,3,4,19],"81":[4,41,4,48],"89":[4,3,4,49],"91":[4,3,4,40],"97":[5,3,5,9],"105":[5,20,5,24],"113":[5,3,5,25],"115":[5,3,5,19],"121":[5,34,5,42],"129":[5,3,5,43],"131":[5,3,5,33],"137":[3,25,6,2],"145":[3,14,6,3],"147":[3,14,3,24],"153":[3,14,6,3],"161":[3,14,6,3],"169":[8,1,8,8],"177":[8,13,8,19],"185":[8,13,8,30],"187":[8,13,8,28],"193":[8,1,8,31],"195":[8,1,8,12],"201":[8,1,8,32],"209":[1,1,9,1],"217":[1,1,9,1],"225":[1,1,9,1],"233":[1,1,9,1],"241":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Filter = require('ldap-filters');\n\nvar output = Filter.AND([\n  Filter.attribute('givenName').equalTo('jenny'),\n  Filter.attribute('sn').equalTo('jensen')\n]);\n\nconsole.log(output.toString());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'Filter', Filter, 0);
            J$.N(225, 'output', output, 0);
            var Filter = J$.X1(41, J$.W(33, 'Filter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'ldap-filters', 21, false)), Filter, 3));
            var output = J$.X1(161, J$.W(153, 'output', J$.M(145, J$.R(49, 'Filter', Filter, 1), 'AND', 0)(J$.T(137, [
                J$.M(89, J$.M(73, J$.R(57, 'Filter', Filter, 1), 'attribute', 0)(J$.T(65, 'givenName', 21, false)), 'equalTo', 0)(J$.T(81, 'jenny', 21, false)),
                J$.M(129, J$.M(113, J$.R(97, 'Filter', Filter, 1), 'attribute', 0)(J$.T(105, 'sn', 21, false)), 'equalTo', 0)(J$.T(121, 'jensen', 21, false))
            ], 10, false)), output, 3));
            J$.X1(201, J$.M(193, J$.R(169, 'console', console, 2), 'log', 0)(J$.M(185, J$.R(177, 'output', output, 1), 'toString', 0)()));
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
