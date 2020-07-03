J$.iids = {"9":[1,14,1,21],"17":[1,22,1,30],"25":[1,14,1,31],"33":[1,14,1,31],"41":[1,14,1,31],"49":[3,20,3,26],"57":[3,39,3,57],"65":[3,16,3,58],"67":[3,20,3,38],"73":[3,16,3,58],"81":[3,16,3,58],"89":[1,1,6,1],"97":[1,1,6,1],"105":[1,1,6,1],"113":[1,1,6,1],"121":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var xmldoc = require('xmldoc');\n\nvar document = new xmldoc.XmlDocument(\"<some>xml</some>\");\n\n// do things\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(89, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(97, 'xmldoc', xmldoc, 0);
            J$.N(105, 'document', document, 0);
            var xmldoc = J$.X1(41, J$.W(33, 'xmldoc', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'xmldoc', 21, false)), xmldoc, 3));
            var document = J$.X1(81, J$.W(73, 'document', J$.M(65, J$.R(49, 'xmldoc', xmldoc, 1), 'XmlDocument', 2)(J$.T(57, "<some>xml</some>", 21, false)), document, 3));
        } catch (J$e) {
            J$.Ex(113, J$e);
        } finally {
            if (J$.Sr(121)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
