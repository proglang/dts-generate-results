J$.iids = {"8":[12,19,12,33],"9":[1,16,1,23],"10":[10,17,10,30],"16":[9,7,9,10],"17":[1,24,1,32],"18":[12,19,12,33],"25":[1,16,1,33],"26":[12,35,12,38],"33":[2,18,2,26],"41":[3,13,3,21],"42":[12,35,12,38],"49":[3,13,3,26],"50":[13,19,13,41],"57":[4,13,4,66],"58":[13,19,13,46],"65":[2,27,5,6],"66":[13,19,13,60],"73":[2,14,5,7],"74":[13,19,13,65],"81":[1,16,1,33],"82":[13,19,13,80],"89":[1,16,1,33],"97":[2,14,5,7],"105":[2,14,5,7],"113":[8,1,8,7],"121":[9,7,9,10],"129":[10,5,10,12],"137":[10,17,10,26],"145":[10,27,10,30],"153":[10,5,10,31],"155":[10,5,10,16],"161":[10,5,10,32],"169":[12,16,12,17],"177":[12,16,12,17],"185":[12,16,12,17],"193":[12,19,12,20],"201":[12,21,12,26],"209":[12,21,12,33],"225":[12,35,12,36],"233":[12,35,12,38],"249":[13,7,13,14],"257":[13,19,13,27],"265":[13,28,13,33],"273":[13,34,13,35],"281":[13,28,13,36],"289":[13,28,13,41],"297":[13,42,13,46],"305":[13,47,13,52],"313":[13,53,13,54],"321":[13,47,13,55],"329":[13,47,13,60],"337":[13,61,13,65],"345":[13,66,13,71],"353":[13,72,13,73],"361":[13,66,13,74],"369":[13,66,13,80],"377":[13,7,13,81],"379":[13,7,13,18],"385":[13,7,13,82],"393":[8,15,14,2],"401":[8,15,14,2],"409":[8,15,14,2],"417":[8,15,14,2],"425":[8,15,14,2],"433":[8,15,14,2],"441":[8,1,14,3],"443":[8,1,8,14],"449":[8,1,14,4],"457":[1,1,15,1],"465":[1,1,15,1],"473":[1,1,15,1],"481":[12,5,13,82],"489":[12,5,13,82],"497":[9,3,13,82],"505":[8,15,14,2],"513":[8,15,14,2],"521":[1,1,15,1],"529":[1,1,15,1],"nBranches":4,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Registry = require('winreg')\n,   regKey = new Registry({                                       // new operator is optional\n      hive: Registry.HKCU,                                        // open registry hive HKEY_CURRENT_USER\n      key:  '\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run' // key containing autostart programs\n    })\n\n// list autostart programs\nregKey.values(function (err, items /* array of RegistryItem */) {\n  if (err)\n    console.log('ERROR: '+err);\n  else\n    for (var i=0; i<items.length; i++)\n      console.log('ITEM: '+items[i].name+'\\t'+items[i].type+'\\t'+items[i].value);\n});\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(457, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(465, 'Registry', Registry, 0);
            J$.N(473, 'regKey', regKey, 0);
            var Registry = J$.X1(89, J$.W(81, 'Registry', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'winreg', 21, false)), Registry, 3)), regKey = J$.X1(105, J$.W(97, 'regKey', J$.F(73, J$.R(33, 'Registry', Registry, 1), 1)(J$.T(65, {
                    hive: J$.G(49, J$.R(41, 'Registry', Registry, 1), 'HKCU', 0),
                    key: J$.T(57, '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', 21, false)
                }, 11, false)), regKey, 3));
            J$.X1(449, J$.M(441, J$.R(113, 'regKey', regKey, 1), 'values', 0)(J$.T(433, function (err, items) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(393, arguments.callee, this, arguments);
                            arguments = J$.N(401, 'arguments', arguments, 4);
                            err = J$.N(409, 'err', err, 4);
                            items = J$.N(417, 'items', items, 4);
                            J$.N(425, 'i', i, 0);
                            if (J$.X1(497, J$.C(16, J$.R(121, 'err', err, 0))))
                                J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.T(137, 'ERROR: ', 21, false), J$.R(145, 'err', err, 0), 0)));
                            else
                                for (var i = J$.X1(185, J$.W(177, 'i', J$.T(169, 0, 22, false), i, 1)); J$.X1(481, J$.C(8, J$.B(18, '<', J$.R(193, 'i', i, 0), J$.G(209, J$.R(201, 'items', items, 0), 'length', 0), 0))); J$.X1(489, J$.B(42, '-', i = J$.W(233, 'i', J$.B(34, '+', J$.U(26, '+', J$.R(225, 'i', i, 0)), J$.T(217, 1, 22, false), 0), i, 0), J$.T(241, 1, 22, false), 0)))
                                J$.X1(385, J$.M(377, J$.R(249, 'console', console, 2), 'log', 0)(J$.B(82, '+', J$.B(74, '+', J$.B(66, '+', J$.B(58, '+', J$.B(50, '+', J$.T(257, 'ITEM: ', 21, false), J$.G(289, J$.G(281, J$.R(265, 'items', items, 0), J$.R(273, 'i', i, 0), 4), 'name', 0), 0), J$.T(297, '\t', 21, false), 0), J$.G(329, J$.G(321, J$.R(305, 'items', items, 0), J$.R(313, 'i', i, 0), 4), 'type', 0), 0), J$.T(337, '\t', 21, false), 0), J$.G(369, J$.G(361, J$.R(345, 'items', items, 0), J$.R(353, 'i', i, 0), 4), 'value', 0), 0)));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 393)));
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
