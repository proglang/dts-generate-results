J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,22,3,29],"33":[3,30,3,40],"41":[3,22,3,41],"49":[3,22,3,56],"57":[3,22,3,56],"65":[3,22,3,56],"73":[4,18,4,32],"81":[5,12,5,19],"89":[6,11,6,15],"97":[7,16,7,34],"105":[4,33,8,2],"113":[4,14,8,3],"121":[4,14,8,3],"129":[4,14,8,3],"137":[9,1,9,7],"145":[10,5,10,9],"153":[10,11,10,18],"161":[10,3,10,20],"169":[12,11,12,20],"177":[11,3,13,4],"185":[9,1,14,2],"187":[9,1,9,19],"193":[9,1,14,3],"201":[15,1,15,7],"209":[16,5,16,9],"217":[16,11,16,18],"225":[16,3,16,20],"233":[18,11,18,20],"241":[17,3,19,4],"249":[15,1,20,2],"251":[15,1,15,19],"257":[15,1,20,3],"265":[21,1,21,7],"273":[22,3,22,10],"281":[24,11,24,20],"289":[23,3,25,4],"297":[21,1,26,2],"299":[21,1,21,19],"305":[21,1,26,3],"313":[27,12,27,18],"321":[27,12,27,30],"323":[27,12,27,28],"329":[27,12,27,30],"337":[27,12,27,30],"345":[28,1,28,8],"353":[28,13,28,17],"361":[28,1,28,18],"363":[28,1,28,12],"369":[28,1,28,19],"377":[1,1,29,1],"385":[1,1,29,1],"393":[1,1,29,1],"401":[1,1,29,1],"409":[1,1,29,1],"417":[1,1,29,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"#!/usr/bin/env node\n'use strict';\n\nvar ArgumentParser = require('argparse').ArgumentParser;\nvar parser = new ArgumentParser({\n  version: '0.0.1',\n  addHelp:true,\n  description: 'Argparse example'\n});\nparser.addArgument(\n  [ '-f', '--foo' ],\n  {\n    help: 'foo bar'\n  }\n);\nparser.addArgument(\n  [ '-b', '--bar' ],\n  {\n    help: 'bar foo'\n  }\n);\nparser.addArgument(\n  '--baz',\n  {\n    help: 'baz bar'\n  }\n);\nvar args = parser.parseArgs();\nconsole.dir(args);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(377, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(385, 'ArgumentParser', ArgumentParser, 0);
            J$.N(393, 'parser', parser, 0);
            J$.N(401, 'args', args, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var ArgumentParser = J$.X1(65, J$.W(57, 'ArgumentParser', J$.G(49, J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'argparse', 21, false)), 'ArgumentParser', 0), ArgumentParser, 3));
            var parser = J$.X1(129, J$.W(121, 'parser', J$.F(113, J$.R(73, 'ArgumentParser', ArgumentParser, 1), 1)(J$.T(105, {
                version: J$.T(81, '0.0.1', 21, false),
                addHelp: J$.T(89, true, 23, false),
                description: J$.T(97, 'Argparse example', 21, false)
            }, 11, false)), parser, 3));
            J$.X1(193, J$.M(185, J$.R(137, 'parser', parser, 1), 'addArgument', 0)(J$.T(161, [
                J$.T(145, '-f', 21, false),
                J$.T(153, '--foo', 21, false)
            ], 10, false), J$.T(177, {
                help: J$.T(169, 'foo bar', 21, false)
            }, 11, false)));
            J$.X1(257, J$.M(249, J$.R(201, 'parser', parser, 1), 'addArgument', 0)(J$.T(225, [
                J$.T(209, '-b', 21, false),
                J$.T(217, '--bar', 21, false)
            ], 10, false), J$.T(241, {
                help: J$.T(233, 'bar foo', 21, false)
            }, 11, false)));
            J$.X1(305, J$.M(297, J$.R(265, 'parser', parser, 1), 'addArgument', 0)(J$.T(273, '--baz', 21, false), J$.T(289, {
                help: J$.T(281, 'baz bar', 21, false)
            }, 11, false)));
            var args = J$.X1(337, J$.W(329, 'args', J$.M(321, J$.R(313, 'parser', parser, 1), 'parseArgs', 0)(), args, 3));
            J$.X1(369, J$.M(361, J$.R(345, 'console', console, 2), 'dir', 0)(J$.R(353, 'args', args, 1)));
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
