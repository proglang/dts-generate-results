J$.iids = {"9":[1,17,1,24],"17":[1,25,1,47],"25":[1,17,1,48],"33":[1,17,1,48],"41":[1,17,1,48],"49":[3,1,3,10],"57":[4,12,4,20],"65":[5,12,5,13],"73":[6,18,6,23],"81":[6,12,6,24],"89":[7,13,7,14],"97":[7,16,7,17],"105":[7,19,7,20],"113":[7,12,7,21],"121":[8,12,8,16],"129":[9,12,9,16],"137":[10,12,10,21],"145":[11,15,11,19],"153":[11,20,11,51],"161":[11,11,11,52],"169":[12,14,12,17],"177":[12,20,12,27],"185":[12,29,12,36],"193":[12,19,12,37],"201":[12,18,12,38],"209":[12,10,12,39],"217":[13,14,13,17],"225":[13,19,13,22],"233":[13,24,13,27],"241":[13,18,13,28],"249":[13,10,13,29],"257":[15,37,15,40],"265":[15,37,15,40],"273":[15,30,15,41],"281":[15,9,15,43],"289":[15,9,15,43],"297":[15,9,15,43],"305":[15,9,15,43],"313":[15,9,15,43],"321":[16,9,16,20],"329":[3,11,17,2],"337":[3,1,17,3],"345":[3,1,17,4],"353":[1,1,18,1],"361":[1,1,18,1],"369":[15,9,15,43],"377":[15,9,15,43],"385":[1,1,18,1],"393":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var serialize = require('serialize-javascript');\n\nserialize({\n    str  : 'string',\n    num  : 0,\n    obj  : {foo: 'foo'},\n    arr  : [1, 2, 3],\n    bool : true,\n    nil  : null,\n    undef: undefined,\n    date: new Date(\"Thu, 28 Apr 2016 22:02:17 GMT\"),\n    map: new Map([['hello', 'world']]),\n    set: new Set([123, 456]),\n\n    fn: function echo(arg) { return arg; },\n    re: /([^\\s]+)/g\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(353, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(361, 'serialize', serialize, 0);
            var serialize = J$.X1(41, J$.W(33, 'serialize', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'serialize-javascript', 21, false)), serialize, 3));
            J$.X1(345, J$.F(337, J$.R(49, 'serialize', serialize, 1), 0)(J$.T(329, {
                str: J$.T(57, 'string', 21, false),
                num: J$.T(65, 0, 22, false),
                obj: J$.T(81, {
                    foo: J$.T(73, 'foo', 21, false)
                }, 11, false),
                arr: J$.T(113, [
                    J$.T(89, 1, 22, false),
                    J$.T(97, 2, 22, false),
                    J$.T(105, 3, 22, false)
                ], 10, false),
                bool: J$.T(121, true, 23, false),
                nil: J$.T(129, null, 25, false),
                undef: J$.T(137, undefined, 24, false),
                date: J$.F(161, J$.R(145, 'Date', Date, 2), 1)(J$.T(153, "Thu, 28 Apr 2016 22:02:17 GMT", 21, false)),
                map: J$.F(209, J$.R(169, 'Map', Map, 2), 1)(J$.T(201, [J$.T(193, [
                        J$.T(177, 'hello', 21, false),
                        J$.T(185, 'world', 21, false)
                    ], 10, false)], 10, false)),
                set: J$.F(249, J$.R(217, 'Set', Set, 2), 1)(J$.T(241, [
                    J$.T(225, 123, 22, false),
                    J$.T(233, 456, 22, false)
                ], 10, false)),
                fn: J$.T(313, function echo(arg) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(281, arguments.callee, this, arguments);
                                arguments = J$.N(289, 'arguments', arguments, 4);
                                echo = J$.N(297, 'echo', echo, 0);
                                arg = J$.N(305, 'arg', arg, 4);
                                return J$.X1(273, J$.Rt(265, J$.R(257, 'arg', arg, 0)));
                            } catch (J$e) {
                                J$.Ex(369, J$e);
                            } finally {
                                if (J$.Fr(377))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 281),
                re: J$.T(321, /([^\s]+)/g, 14, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
