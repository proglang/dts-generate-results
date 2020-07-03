J$.iids = {"9":[1,11,1,18],"17":[1,19,1,29],"25":[1,11,1,30],"33":[1,11,1,30],"41":[1,11,1,30],"49":[4,1,4,4],"57":[4,10,4,24],"65":[4,1,4,25],"67":[4,1,4,9],"73":[4,1,4,26],"81":[8,1,8,4],"89":[8,10,8,20],"97":[8,1,8,21],"99":[8,1,8,9],"105":[8,1,8,22],"113":[12,1,12,4],"121":[12,14,12,24],"129":[12,1,12,25],"131":[12,1,12,13],"137":[12,1,12,26],"145":[16,1,16,4],"153":[16,16,16,34],"161":[16,1,16,35],"163":[16,1,16,15],"169":[16,1,16,36],"177":[1,1,18,1],"185":[1,1,18,1],"193":[1,1,18,1],"201":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var b64 = require('b64-lite');\n\n// Base64 in ASCII to byte string\nb64.atob('aGkgdGhlcmU=');\n// hi there\n\n// byte string to Base64 in ASCII\nb64.btoa('hi there');\n// aGkgdGhlcmU=\n\n// convert unicode to b64\nb64.toBase64('hello 你好');\n// aGVsbG8g5L2g5aW9\n\n// decode b64 to unicode\nb64.fromBase64('aGVsbG8g5L2g5aW9');\n// hello 你好\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'b64', b64, 0);
            var b64 = J$.X1(41, J$.W(33, 'b64', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'b64-lite', 21, false)), b64, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'b64', b64, 1), 'atob', 0)(J$.T(57, 'aGkgdGhlcmU=', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'b64', b64, 1), 'btoa', 0)(J$.T(89, 'hi there', 21, false)));
            J$.X1(137, J$.M(129, J$.R(113, 'b64', b64, 1), 'toBase64', 0)(J$.T(121, 'hello 你好', 21, false)));
            J$.X1(169, J$.M(161, J$.R(145, 'b64', b64, 1), 'fromBase64', 0)(J$.T(153, 'aGVsbG8g5L2g5aW9', 21, false)));
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
