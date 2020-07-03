J$.iids = {"9":[1,15,1,22],"10":[4,3,5,15],"17":[1,23,1,40],"18":[4,3,6,15],"25":[1,15,1,41],"26":[4,3,7,12],"33":[1,15,1,41],"41":[1,15,1,41],"49":[4,3,4,15],"57":[5,3,5,15],"65":[6,3,6,15],"73":[7,3,7,12],"81":[4,3,7,12],"89":[4,3,7,12],"97":[9,19,9,26],"105":[9,27,9,39],"113":[9,15,9,40],"121":[9,15,9,40],"129":[9,15,9,40],"137":[11,14,11,21],"145":[11,14,11,29],"147":[11,14,11,27],"153":[11,14,11,29],"161":[11,14,11,29],"169":[1,1,12,1],"177":[1,1,12,1],"185":[1,1,12,1],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var OBJFile = require('obj-file-parser');\n\nvar fileContents =\n  'v 0 0 0 \\n' +\n  'v 0 1 0 \\n' +\n  'v 1 0 0 \\n' +\n  'f 1 2 3';\n\nvar objFile = new OBJFile(fileContents);\n\nvar output = objFile.parse(); // see description below\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'OBJFile', OBJFile, 0);
            J$.N(185, 'fileContents', fileContents, 0);
            J$.N(193, 'objFile', objFile, 0);
            J$.N(201, 'output', output, 0);
            var OBJFile = J$.X1(41, J$.W(33, 'OBJFile', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'obj-file-parser', 21, false)), OBJFile, 3));
            var fileContents = J$.X1(89, J$.W(81, 'fileContents', J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(49, 'v 0 0 0 \n', 21, false), J$.T(57, 'v 0 1 0 \n', 21, false), 0), J$.T(65, 'v 1 0 0 \n', 21, false), 0), J$.T(73, 'f 1 2 3', 21, false), 0), fileContents, 3));
            var objFile = J$.X1(129, J$.W(121, 'objFile', J$.F(113, J$.R(97, 'OBJFile', OBJFile, 1), 1)(J$.R(105, 'fileContents', fileContents, 1)), objFile, 3));
            var output = J$.X1(161, J$.W(153, 'output', J$.M(145, J$.R(137, 'objFile', objFile, 1), 'parse', 0)(), output, 3));
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
