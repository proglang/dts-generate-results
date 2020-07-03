J$.iids = {"9":[1,15,1,22],"10":[14,15,14,64],"17":[1,23,1,35],"18":[14,15,14,71],"25":[1,15,1,36],"33":[1,15,1,36],"41":[1,15,1,36],"49":[4,1,4,8],"57":[4,16,4,18],"65":[4,1,4,19],"67":[4,1,4,15],"73":[4,1,4,20],"81":[8,1,8,8],"89":[8,18,8,21],"97":[8,1,8,22],"99":[8,1,8,17],"105":[8,1,8,23],"113":[11,21,11,28],"121":[11,21,11,37],"123":[11,21,11,35],"129":[11,50,11,57],"137":[11,50,11,68],"139":[11,50,11,66],"145":[11,21,11,37],"153":[11,21,11,37],"161":[11,50,11,68],"169":[11,50,11,68],"177":[13,1,13,8],"185":[14,3,14,10],"193":[14,15,14,51],"201":[14,54,14,64],"209":[14,67,14,71],"217":[14,3,14,72],"219":[14,3,14,14],"225":[14,3,14,73],"233":[13,15,15,2],"241":[13,15,15,2],"249":[13,15,15,2],"257":[13,15,15,2],"265":[13,1,15,3],"267":[13,1,13,14],"273":[13,1,15,4],"281":[1,1,16,1],"289":[1,1,16,1],"297":[1,1,16,1],"305":[1,1,16,1],"313":[13,15,15,2],"321":[13,15,15,2],"329":[1,1,16,1],"337":[1,1,16,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var toobusy = require('toobusy-js');\n\n// Set maximum lag to an aggressive value.\ntoobusy.maxLag(10);\n\n// Set check interval to a faster value. This will catch more latency spikes\n// but may cause the check to be too sensitive.\ntoobusy.interval(250);\n\n// Get current maxLag or interval setting by calling without parameters.\nvar currentMaxLag = toobusy.maxLag(), interval = toobusy.interval();\n\ntoobusy.onLag(function(currentLag) {\n  console.log(\"Event loop lag detected! Latency: \" + currentLag + \"ms\");\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'toobusy', toobusy, 0);
            J$.N(297, 'currentMaxLag', currentMaxLag, 0);
            J$.N(305, 'interval', interval, 0);
            var toobusy = J$.X1(41, J$.W(33, 'toobusy', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'toobusy-js', 21, false)), toobusy, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'toobusy', toobusy, 1), 'maxLag', 0)(J$.T(57, 10, 22, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'toobusy', toobusy, 1), 'interval', 0)(J$.T(89, 250, 22, false)));
            var currentMaxLag = J$.X1(153, J$.W(145, 'currentMaxLag', J$.M(121, J$.R(113, 'toobusy', toobusy, 1), 'maxLag', 0)(), currentMaxLag, 3)), interval = J$.X1(169, J$.W(161, 'interval', J$.M(137, J$.R(129, 'toobusy', toobusy, 1), 'interval', 0)(), interval, 3));
            J$.X1(273, J$.M(265, J$.R(177, 'toobusy', toobusy, 1), 'onLag', 0)(J$.T(257, function (currentLag) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            currentLag = J$.N(249, 'currentLag', currentLag, 4);
                            J$.X1(225, J$.M(217, J$.R(185, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(193, "Event loop lag detected! Latency: ", 21, false), J$.R(201, 'currentLag', currentLag, 0), 0), J$.T(209, "ms", 21, false), 0)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
