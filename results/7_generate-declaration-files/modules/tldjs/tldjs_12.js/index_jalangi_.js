J$.iids = {"9":[1,13,1,20],"17":[1,21,1,28],"25":[1,13,1,29],"33":[1,13,1,29],"41":[1,13,1,29],"49":[3,1,3,6],"57":[3,13,3,79],"65":[3,1,3,80],"67":[3,1,3,12],"73":[3,1,3,81],"81":[13,1,13,6],"89":[13,13,13,39],"97":[13,1,13,40],"99":[13,1,13,12],"105":[13,1,13,41],"113":[23,1,23,6],"121":[23,13,23,34],"129":[23,1,23,35],"131":[23,1,23,12],"137":[23,1,23,35],"145":[1,1,32,1],"153":[1,1,32,1],"161":[1,1,32,1],"169":[1,1,32,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var tldjs = require('tldjs');\n\ntldjs.parse('https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv');\n// { hostname: 'spark-public.s3.amazonaws.com',\n//   isValid: true,\n//   isIp: false,\n//   tldExists: true,\n//   publicSuffix: 's3.amazonaws.com',\n//   domain: 'spark-public.s3.amazonaws.com',\n//   subdomain: ''\n// }\n\ntldjs.parse('gopher://domain.unknown/');\n// { hostname: 'domain.unknown',\n//   isValid: true,\n//   isIp: false,\n//   tldExists: false,\n//   publicSuffix: 'unknown',\n//   domain: 'domain.unknown',\n//   subdomain: ''\n// }\n\ntldjs.parse('https://192.168.0.0')\n// { hostname: '192.168.0.0',\n//   isValid: true,\n//   isIp: true,\n//   tldExists: false,\n//   publicSuffix: null,\n//   domain: null,\n//   subdomain: null\n// }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'tldjs', tldjs, 0);
            var tldjs = J$.X1(41, J$.W(33, 'tldjs', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'tldjs', 21, false)), tldjs, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'tldjs', tldjs, 1), 'parse', 0)(J$.T(57, 'https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv', 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'tldjs', tldjs, 1), 'parse', 0)(J$.T(89, 'gopher://domain.unknown/', 21, false)));
            J$.X1(137, J$.M(129, J$.R(113, 'tldjs', tldjs, 1), 'parse', 0)(J$.T(121, 'https://192.168.0.0', 21, false)));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
