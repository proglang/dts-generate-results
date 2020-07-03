J$.iids = {"9":[1,11,1,18],"10":[4,15,4,36],"17":[1,19,1,29],"18":[4,15,4,52],"25":[1,11,1,30],"33":[1,11,1,30],"41":[1,11,1,30],"49":[3,1,3,4],"57":[3,8,3,17],"65":[4,3,4,10],"73":[4,15,4,19],"81":[4,15,4,24],"89":[4,27,4,36],"97":[4,39,4,43],"105":[4,39,4,52],"113":[4,3,4,53],"115":[4,3,4,14],"121":[4,3,4,54],"129":[3,19,5,2],"137":[3,19,5,2],"145":[3,19,5,2],"153":[3,19,5,2],"161":[3,1,5,3],"163":[3,1,3,7],"169":[3,1,5,4],"177":[1,1,6,1],"185":[1,1,6,1],"193":[3,19,5,2],"201":[3,19,5,2],"209":[1,1,6,1],"217":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var bus = require('framebus');\n\nbus.on('message', function (data) {\n  console.log(data.from + ' said: ' + data.contents);\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(177, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(185, 'bus', bus, 0);
            var bus = J$.X1(41, J$.W(33, 'bus', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'framebus', 21, false)), bus, 3));
            J$.X1(169, J$.M(161, J$.R(49, 'bus', bus, 1), 'on', 0)(J$.T(57, 'message', 21, false), J$.T(153, function (data) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            data = J$.N(145, 'data', data, 4);
                            J$.X1(121, J$.M(113, J$.R(65, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.G(81, J$.R(73, 'data', data, 0), 'from', 0), J$.T(89, ' said: ', 21, false), 0), J$.G(105, J$.R(97, 'data', data, 0), 'contents', 0), 0)));
                        } catch (J$e) {
                            J$.Ex(193, J$e);
                        } finally {
                            if (J$.Fr(201))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 129)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
