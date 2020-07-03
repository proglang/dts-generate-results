J$.iids = {"9":[2,2,2,6],"10":[5,9,5,24],"17":[2,19,2,28],"18":[5,9,5,35],"25":[2,2,2,28],"26":[9,9,9,46],"33":[2,2,2,29],"34":[9,9,9,52],"41":[3,2,3,6],"42":[9,9,9,68],"49":[3,18,3,26],"57":[3,2,3,26],"65":[3,2,3,27],"73":[5,9,5,18],"81":[5,21,5,24],"89":[5,27,5,35],"97":[5,9,5,35],"105":[5,2,5,36],"113":[1,26,6,2],"121":[1,26,6,2],"129":[1,26,6,2],"137":[1,26,6,2],"145":[1,26,6,2],"153":[1,26,6,2],"161":[1,26,6,2],"169":[8,1,8,19],"177":[8,1,8,29],"185":[9,9,9,29],"193":[9,32,9,36],"201":[9,32,9,46],"209":[9,49,9,52],"217":[9,55,9,59],"225":[9,55,9,68],"233":[9,9,9,68],"241":[9,2,9,69],"249":[8,41,10,2],"257":[8,41,10,2],"265":[8,41,10,2],"273":[8,1,10,2],"281":[8,1,10,3],"289":[12,1,12,19],"297":[13,9,13,33],"305":[13,9,13,33],"313":[13,2,13,34],"321":[12,38,14,2],"329":[12,38,14,2],"337":[12,38,14,2],"345":[12,1,14,2],"353":[12,1,14,3],"361":[16,1,16,7],"369":[16,18,16,36],"377":[16,1,16,36],"385":[16,1,16,37],"393":[1,1,16,38],"401":[1,1,16,38],"409":[1,26,6,2],"417":[1,26,6,2],"425":[8,41,10,2],"433":[8,41,10,2],"441":[12,38,14,2],"449":[12,38,14,2],"457":[1,1,16,38],"465":[1,1,16,38],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/multi-purpose-module.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/multi-purpose-module_jalangi_.js","code":"var multiPurposeModule = function (firstName, lastName) {\n\tthis.firstName = firstName;\n\tthis.lastName = lastName;\n\n\treturn firstName + \" \" + lastName;\n};\n\nmultiPurposeModule.prototype.sayHello = function () {\n\treturn \"Hello, my name is \" + this.firstName + \" \" + this.lastName;\n};\n\nmultiPurposeModule.anotherFunction = function () {\n\treturn \"I am another function!\";\n};\n\nmodule.exports = multiPurposeModule; "};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(393, '/tmp/runtimeAnalysis/multi-purpose-module_jalangi_.js', '/tmp/runtimeAnalysis/multi-purpose-module.js');
            J$.N(401, 'multiPurposeModule', multiPurposeModule, 0);
            var multiPurposeModule = J$.X1(161, J$.W(153, 'multiPurposeModule', J$.T(145, function (firstName, lastName) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            firstName = J$.N(129, 'firstName', firstName, 4);
                            lastName = J$.N(137, 'lastName', lastName, 4);
                            J$.X1(33, J$.P(25, J$.R(9, 'this', this, 0), 'firstName', J$.R(17, 'firstName', firstName, 0), 0));
                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'lastName', J$.R(49, 'lastName', lastName, 0), 0));
                            return J$.X1(105, J$.Rt(97, J$.B(18, '+', J$.B(10, '+', J$.R(73, 'firstName', firstName, 0), J$.T(81, " ", 21, false), 0), J$.R(89, 'lastName', lastName, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 113), multiPurposeModule, 3));
            J$.X1(281, J$.P(273, J$.G(177, J$.R(169, 'multiPurposeModule', multiPurposeModule, 1), 'prototype', 0), 'sayHello', J$.T(265, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            return J$.X1(241, J$.Rt(233, J$.B(42, '+', J$.B(34, '+', J$.B(26, '+', J$.T(185, "Hello, my name is ", 21, false), J$.G(201, J$.R(193, 'this', this, 0), 'firstName', 0), 0), J$.T(209, " ", 21, false), 0), J$.G(225, J$.R(217, 'this', this, 0), 'lastName', 0), 0)));
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249), 0));
            J$.X1(353, J$.P(345, J$.R(289, 'multiPurposeModule', multiPurposeModule, 1), 'anotherFunction', J$.T(337, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            return J$.X1(313, J$.Rt(305, J$.T(297, "I am another function!", 21, false)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321), 0));
            J$.X1(385, J$.P(377, J$.R(361, 'module', module, 2), 'exports', J$.R(369, 'multiPurposeModule', multiPurposeModule, 1), 0));
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
