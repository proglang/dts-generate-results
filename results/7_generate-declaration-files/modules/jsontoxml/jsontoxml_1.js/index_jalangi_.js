J$.iids = {"9":[1,15,1,22],"10":[18,11,18,26],"17":[1,23,1,34],"25":[1,15,1,35],"33":[1,15,1,35],"41":[1,15,1,35],"49":[3,11,3,18],"57":[4,7,4,21],"65":[6,9,6,15],"73":[6,21,6,32],"81":[6,49,6,55],"89":[6,42,6,56],"97":[6,3,6,57],"105":[7,9,7,15],"113":[7,21,7,32],"121":[7,45,7,50],"129":[7,39,7,51],"137":[8,10,8,17],"145":[8,23,8,29],"153":[8,4,8,30],"161":[9,4,9,8],"169":[10,10,10,17],"177":[10,23,10,29],"185":[10,42,10,43],"193":[10,36,10,44],"201":[10,4,10,45],"209":[7,61,11,4],"217":[7,3,11,5],"225":[12,9,12,15],"233":[12,22,12,37],"241":[12,3,12,38],"249":[5,9,13,3],"257":[15,6,15,30],"265":[16,8,16,45],"273":[18,16,18,20],"281":[18,12,18,22],"289":[18,24,18,26],"297":[18,11,18,26],"305":[18,4,18,27],"313":[17,8,19,4],"321":[17,8,19,4],"329":[17,8,19,4],"337":[14,10,20,3],"345":[3,19,21,2],"353":[3,11,21,3],"361":[3,11,21,3],"369":[3,11,21,3],"377":[23,1,23,8],"385":[23,13,23,16],"393":[23,1,23,17],"395":[23,1,23,12],"401":[23,1,23,18],"409":[1,1,25,1],"417":[1,1,25,1],"425":[1,1,25,1],"433":[17,8,19,4],"441":[17,8,19,4],"449":[1,1,25,1],"457":[1,1,25,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var jsonxml = require('jsontoxml');\n\nvar xml = jsonxml({\n\tnode:'text content',\n\tparent:[\n\t\t{name:'taco',text:'beef taco',children:{salsa:'hot!'}},\n\t\t{name:'taco',text:'fish taco',attrs:{mood:'sad'},children:[\n\t\t\t{name:'salsa',text:'mild'},\n\t\t\t'hi',\n\t\t\t{name:'salsa',text:'weak',attrs:{type:2}}\n\t\t]},\n\t\t{name:'taco',attrs:'mood=\"party!\"'}\n\t],\n\tparent2:{\n\t\thi:'is a nice thing to say',\n\t\tnode:'i am another not special child node',\n\t\tdate:function(){\n\t\t\treturn (new Date())+'';\n\t\t}\n\t}\n})\n\nconsole.log(xml);\n\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(409, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(417, 'jsonxml', jsonxml, 0);
            J$.N(425, 'xml', xml, 0);
            var jsonxml = J$.X1(41, J$.W(33, 'jsonxml', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'jsontoxml', 21, false)), jsonxml, 3));
            var xml = J$.X1(369, J$.W(361, 'xml', J$.F(353, J$.R(49, 'jsonxml', jsonxml, 1), 0)(J$.T(345, {
                node: J$.T(57, 'text content', 21, false),
                parent: J$.T(249, [
                    J$.T(97, {
                        name: J$.T(65, 'taco', 21, false),
                        text: J$.T(73, 'beef taco', 21, false),
                        children: J$.T(89, {
                            salsa: J$.T(81, 'hot!', 21, false)
                        }, 11, false)
                    }, 11, false),
                    J$.T(217, {
                        name: J$.T(105, 'taco', 21, false),
                        text: J$.T(113, 'fish taco', 21, false),
                        attrs: J$.T(129, {
                            mood: J$.T(121, 'sad', 21, false)
                        }, 11, false),
                        children: J$.T(209, [
                            J$.T(153, {
                                name: J$.T(137, 'salsa', 21, false),
                                text: J$.T(145, 'mild', 21, false)
                            }, 11, false),
                            J$.T(161, 'hi', 21, false),
                            J$.T(201, {
                                name: J$.T(169, 'salsa', 21, false),
                                text: J$.T(177, 'weak', 21, false),
                                attrs: J$.T(193, {
                                    type: J$.T(185, 2, 22, false)
                                }, 11, false)
                            }, 11, false)
                        ], 10, false)
                    }, 11, false),
                    J$.T(241, {
                        name: J$.T(225, 'taco', 21, false),
                        attrs: J$.T(233, 'mood="party!"', 21, false)
                    }, 11, false)
                ], 10, false),
                parent2: J$.T(337, {
                    hi: J$.T(257, 'is a nice thing to say', 21, false),
                    node: J$.T(265, 'i am another not special child node', 21, false),
                    date: J$.T(329, function () {
                        jalangiLabel0:
                            while (true) {
                                try {
                                    J$.Fe(313, arguments.callee, this, arguments);
                                    arguments = J$.N(321, 'arguments', arguments, 4);
                                    return J$.X1(305, J$.Rt(297, J$.B(10, '+', J$.F(281, J$.R(273, 'Date', Date, 2), 1)(), J$.T(289, '', 21, false), 0)));
                                } catch (J$e) {
                                    J$.Ex(433, J$e);
                                } finally {
                                    if (J$.Fr(441))
                                        continue jalangiLabel0;
                                    else
                                        return J$.Ra();
                                }
                            }
                    }, 12, false, 313)
                }, 11, false)
            }, 11, false)), xml, 3));
            J$.X1(401, J$.M(393, J$.R(377, 'console', console, 2), 'log', 0)(J$.R(385, 'xml', xml, 1)));
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
