J$.iids = {"9":[1,19,1,26],"17":[1,27,1,35],"25":[1,19,1,36],"33":[1,19,1,48],"41":[1,19,1,48],"49":[1,19,1,48],"57":[2,11,2,39],"65":[2,11,2,39],"73":[2,11,2,39],"81":[3,1,3,12],"89":[3,13,3,16],"97":[4,5,4,12],"105":[4,17,4,23],"113":[4,5,4,24],"115":[4,5,4,16],"121":[4,5,4,25],"129":[3,18,5,2],"137":[3,18,5,2],"145":[3,18,5,2],"153":[3,18,5,2],"161":[3,18,5,2],"169":[3,1,5,3],"177":[3,1,5,4],"185":[1,1,6,1],"193":[1,1,6,1],"201":[1,1,6,1],"209":[3,18,5,2],"217":[3,18,5,2],"225":[1,1,6,1],"233":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var parseString = require('xml2js').parseString;\nvar xml = \"<root>Hello xml2js!</root>\"\nparseString(xml, function (err, result) {\n    console.dir(result);\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'parseString', parseString, 0);
            J$.N(201, 'xml', xml, 0);
            var parseString = J$.X1(49, J$.W(41, 'parseString', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'xml2js', 21, false)), 'parseString', 0), parseString, 3));
            var xml = J$.X1(73, J$.W(65, 'xml', J$.T(57, "<root>Hello xml2js!</root>", 21, false), xml, 3));
            J$.X1(177, J$.F(169, J$.R(81, 'parseString', parseString, 1), 0)(J$.R(89, 'xml', xml, 1), J$.T(161, function (err, result) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            err = J$.N(145, 'err', err, 4);
                            result = J$.N(153, 'result', result, 4);
                            J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'dir', 0)(J$.R(105, 'result', result, 0)));
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 129)));
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
