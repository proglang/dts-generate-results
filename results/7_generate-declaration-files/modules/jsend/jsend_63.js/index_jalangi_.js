J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,29],"41":[1,13,1,29],"49":[4,1,4,6],"57":[5,10,5,19],"65":[6,14,6,19],"73":[6,8,6,21],"81":[4,15,7,2],"89":[4,1,7,3],"91":[4,1,4,14],"97":[4,1,7,4],"105":[10,1,10,6],"113":[11,10,11,19],"121":[10,15,12,2],"129":[10,1,12,3],"131":[10,1,10,14],"137":[10,1,12,4],"145":[15,1,15,6],"153":[16,10,16,19],"161":[17,14,17,19],"169":[17,8,17,21],"177":[18,8,18,15],"185":[15,15,19,2],"193":[15,1,19,3],"195":[15,1,15,14],"201":[15,1,19,4],"209":[1,1,20,1],"217":[1,1,20,1],"225":[1,1,20,1],"233":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var jsend = require('jsend');\n\n// Returns true\njsend.isValid({\n\tstatus: 'success',\n\tdata: { foo:'bar' }\n});\n\n// Returns false\njsend.isValid({\n\tstatus: 'success'\n});\n\n// Returns true\njsend.isValid({\n\tstatus: 'success',\n\tdata: { foo:'bar' },\n\tjunk: 'is ok'\n});\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(209, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(217, 'jsend', jsend, 0);
            var jsend = J$.X1(41, J$.W(33, 'jsend', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'jsend', 21, false)), jsend, 3));
            J$.X1(97, J$.M(89, J$.R(49, 'jsend', jsend, 1), 'isValid', 0)(J$.T(81, {
                status: J$.T(57, 'success', 21, false),
                data: J$.T(73, {
                    foo: J$.T(65, 'bar', 21, false)
                }, 11, false)
            }, 11, false)));
            J$.X1(137, J$.M(129, J$.R(105, 'jsend', jsend, 1), 'isValid', 0)(J$.T(121, {
                status: J$.T(113, 'success', 21, false)
            }, 11, false)));
            J$.X1(201, J$.M(193, J$.R(145, 'jsend', jsend, 1), 'isValid', 0)(J$.T(185, {
                status: J$.T(153, 'success', 21, false),
                data: J$.T(169, {
                    foo: J$.T(161, 'bar', 21, false)
                }, 11, false),
                junk: J$.T(177, 'is ok', 21, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
