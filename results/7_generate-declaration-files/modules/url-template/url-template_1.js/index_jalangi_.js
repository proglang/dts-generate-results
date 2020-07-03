J$.iids = {"9":[1,16,1,23],"17":[1,24,1,38],"25":[1,16,1,39],"33":[1,16,1,39],"41":[1,16,1,39],"49":[3,24,3,32],"57":[3,39,3,63],"65":[3,24,3,64],"67":[3,24,3,38],"73":[3,24,3,64],"81":[3,24,3,64],"89":[4,16,4,32],"97":[5,10,5,23],"105":[6,11,6,17],"113":[7,7,7,9],"121":[4,40,8,2],"129":[4,16,8,3],"131":[4,16,4,39],"137":[4,16,8,3],"145":[4,16,8,3],"153":[10,1,10,8],"161":[10,13,10,21],"169":[10,1,10,22],"171":[10,1,10,12],"177":[10,1,10,23],"185":[1,1,12,1],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[1,1,12,1],"225":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var template = require('url-template');\n\nvar emailUrlTemplate = template.parse('/{email}/{folder}/{id}');\nvar emailUrl = emailUrlTemplate.expand({\n  email: 'user@domain',\n  folder: 'test',\n  id: 42\n});\n\nconsole.log(emailUrl);\n// Returns '/user@domain/test/42'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'template', template, 0);
            J$.N(201, 'emailUrlTemplate', emailUrlTemplate, 0);
            J$.N(209, 'emailUrl', emailUrl, 0);
            var template = J$.X1(41, J$.W(33, 'template', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'url-template', 21, false)), template, 3));
            var emailUrlTemplate = J$.X1(81, J$.W(73, 'emailUrlTemplate', J$.M(65, J$.R(49, 'template', template, 1), 'parse', 0)(J$.T(57, '/{email}/{folder}/{id}', 21, false)), emailUrlTemplate, 3));
            var emailUrl = J$.X1(145, J$.W(137, 'emailUrl', J$.M(129, J$.R(89, 'emailUrlTemplate', emailUrlTemplate, 1), 'expand', 0)(J$.T(121, {
                email: J$.T(97, 'user@domain', 21, false),
                folder: J$.T(105, 'test', 21, false),
                id: J$.T(113, 42, 22, false)
            }, 11, false)), emailUrl, 3));
            J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.R(161, 'emailUrl', emailUrl, 1)));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
