J$.iids = {"9":[1,17,1,24],"17":[1,25,1,34],"25":[1,17,1,35],"33":[1,17,1,35],"41":[1,17,1,35],"49":[2,21,2,28],"57":[2,17,2,30],"65":[2,17,2,30],"73":[2,17,2,30],"81":[3,1,3,7],"89":[3,14,3,32],"97":[3,1,3,33],"99":[3,1,3,13],"105":[3,1,3,34],"113":[4,1,4,7],"121":[4,28,4,37],"129":[4,22,4,38],"137":[4,1,4,39],"139":[4,1,4,21],"145":[4,1,4,40],"153":[5,1,5,8],"161":[5,13,5,19],"169":[5,13,5,32],"171":[5,13,5,30],"177":[5,1,5,33],"179":[5,1,5,12],"185":[5,1,5,34],"193":[1,1,6,1],"201":[1,1,6,1],"209":[1,1,6,1],"217":[1,1,6,1],"225":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var smtpapi   = require('smtpapi');\nvar header    = new smtpapi();\nheader.addTo('test@example.com');\nheader.setUniqueArgs({cow: 'chicken'});\nconsole.log(header.jsonString());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'smtpapi', smtpapi, 0);
            J$.N(209, 'header', header, 0);
            var smtpapi = J$.X1(41, J$.W(33, 'smtpapi', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'smtpapi', 21, false)), smtpapi, 3));
            var header = J$.X1(73, J$.W(65, 'header', J$.F(57, J$.R(49, 'smtpapi', smtpapi, 1), 1)(), header, 3));
            J$.X1(105, J$.M(97, J$.R(81, 'header', header, 1), 'addTo', 0)(J$.T(89, 'test@example.com', 21, false)));
            J$.X1(145, J$.M(137, J$.R(113, 'header', header, 1), 'setUniqueArgs', 0)(J$.T(129, {
                cow: J$.T(121, 'chicken', 21, false)
            }, 11, false)));
            J$.X1(185, J$.M(177, J$.R(153, 'console', console, 2), 'log', 0)(J$.M(169, J$.R(161, 'header', header, 1), 'jsonString', 0)()));
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
