J$.iids = {"9":[1,20,1,27],"17":[1,28,1,48],"25":[1,20,1,49],"33":[1,20,1,55],"41":[1,20,1,55],"49":[1,20,1,55],"57":[3,18,3,30],"65":[4,9,4,14],"73":[5,24,5,53],"81":[5,11,5,55],"89":[6,10,6,30],"97":[7,11,7,63],"105":[3,31,8,2],"113":[3,14,8,3],"121":[3,14,8,3],"129":[3,14,8,3],"137":[1,1,11,1],"145":[1,1,11,1],"153":[1,1,11,1],"161":[1,1,11,1],"169":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var JSONAPIError = require('jsonapi-serializer').Error;\n\nvar errors = new JSONAPIError({\n  code: '123',\n  source: { 'pointer': '/data/attributes/first-name' },\n  title: 'Value is too short',\n  detail: 'First name must contain at least three characters.'\n});\n\n// `errors` here are JSON API compliant.\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(145, 'JSONAPIError', JSONAPIError, 0);
            J$.N(153, 'errors', errors, 0);
            var JSONAPIError = J$.X1(49, J$.W(41, 'JSONAPIError', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'jsonapi-serializer', 21, false)), 'Error', 0), JSONAPIError, 3));
            var errors = J$.X1(129, J$.W(121, 'errors', J$.F(113, J$.R(57, 'JSONAPIError', JSONAPIError, 1), 1)(J$.T(105, {
                code: J$.T(65, '123', 21, false),
                source: J$.T(81, {
                    'pointer': J$.T(73, '/data/attributes/first-name', 21, false)
                }, 11, false),
                title: J$.T(89, 'Value is too short', 21, false),
                detail: J$.T(97, 'First name must contain at least three characters.', 21, false)
            }, 11, false)), errors, 3));
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
