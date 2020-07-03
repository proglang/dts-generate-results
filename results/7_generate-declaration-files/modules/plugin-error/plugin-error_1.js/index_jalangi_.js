J$.iids = {"9":[1,19,1,26],"17":[1,27,1,41],"25":[1,19,1,42],"33":[1,19,1,42],"41":[1,19,1,42],"49":[3,15,3,26],"57":[3,27,3,33],"65":[4,12,4,29],"73":[3,35,5,2],"81":[3,11,5,3],"89":[3,11,5,3],"97":[3,11,5,3],"105":[7,15,7,26],"113":[8,11,8,17],"121":[9,12,9,29],"129":[7,27,10,2],"137":[7,11,10,3],"145":[7,11,10,3],"153":[7,11,10,3],"161":[12,15,12,26],"169":[12,27,12,33],"177":[12,35,12,52],"185":[12,11,12,53],"193":[12,11,12,53],"201":[12,11,12,53],"209":[14,15,14,26],"217":[14,27,14,33],"225":[14,35,14,52],"233":[14,67,14,71],"241":[14,54,14,73],"249":[14,11,14,74],"257":[14,11,14,74],"265":[14,11,14,74],"273":[16,25,16,30],"281":[16,31,16,36],"289":[16,21,16,37],"297":[16,21,16,37],"305":[16,21,16,37],"313":[17,15,17,26],"321":[17,27,17,33],"329":[17,35,17,48],"337":[17,63,17,67],"345":[17,50,17,69],"353":[17,11,17,70],"361":[17,11,17,70],"369":[17,11,17,70],"377":[1,1,18,1],"385":[1,1,18,1],"393":[1,1,18,1],"401":[1,1,18,1],"409":[1,1,18,1],"417":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var PluginError = require('plugin-error');\n\nvar err = new PluginError('test', {\n  message: 'something broke'\n});\n\nvar err = new PluginError({\n  plugin: 'test',\n  message: 'something broke'\n});\n\nvar err = new PluginError('test', 'something broke');\n\nvar err = new PluginError('test', 'something broke', { showStack: true });\n\nvar existingError = new Error('OMG');\nvar err = new PluginError('test', existingError, { showStack: true });\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'PluginError', PluginError, 0);
            J$.N(393, 'err', err, 0);
            J$.N(401, 'existingError', existingError, 0);
            var PluginError = J$.X1(41, J$.W(33, 'PluginError', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'plugin-error', 21, false)), PluginError, 3));
            var err = J$.X1(97, J$.W(89, 'err', J$.F(81, J$.R(49, 'PluginError', PluginError, 1), 1)(J$.T(57, 'test', 21, false), J$.T(73, {
                message: J$.T(65, 'something broke', 21, false)
            }, 11, false)), err, 3));
            var err = J$.X1(153, J$.W(145, 'err', J$.F(137, J$.R(105, 'PluginError', PluginError, 1), 1)(J$.T(129, {
                plugin: J$.T(113, 'test', 21, false),
                message: J$.T(121, 'something broke', 21, false)
            }, 11, false)), err, 3));
            var err = J$.X1(201, J$.W(193, 'err', J$.F(185, J$.R(161, 'PluginError', PluginError, 1), 1)(J$.T(169, 'test', 21, false), J$.T(177, 'something broke', 21, false)), err, 3));
            var err = J$.X1(265, J$.W(257, 'err', J$.F(249, J$.R(209, 'PluginError', PluginError, 1), 1)(J$.T(217, 'test', 21, false), J$.T(225, 'something broke', 21, false), J$.T(241, {
                showStack: J$.T(233, true, 23, false)
            }, 11, false)), err, 3));
            var existingError = J$.X1(305, J$.W(297, 'existingError', J$.F(289, J$.R(273, 'Error', Error, 2), 1)(J$.T(281, 'OMG', 21, false)), existingError, 3));
            var err = J$.X1(369, J$.W(361, 'err', J$.F(353, J$.R(313, 'PluginError', PluginError, 1), 1)(J$.T(321, 'test', 21, false), J$.R(329, 'existingError', existingError, 1), J$.T(345, {
                showStack: J$.T(337, true, 23, false)
            }, 11, false)), err, 3));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
