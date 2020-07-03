J$.iids = {"9":[2,12,2,19],"17":[2,20,2,26],"25":[2,12,2,27],"33":[3,14,3,21],"41":[3,22,3,30],"49":[3,14,3,31],"57":[3,14,3,38],"65":[4,12,4,19],"73":[4,20,4,26],"81":[4,12,4,27],"89":[5,28,5,34],"97":[5,36,5,40],"105":[5,27,5,41],"113":[6,28,6,34],"121":[6,36,6,42],"129":[6,27,6,43],"137":[7,27,7,31],"145":[8,30,8,35],"153":[8,37,8,45],"161":[8,47,8,54],"169":[8,28,8,56],"177":[9,28,9,35],"185":[10,28,10,35],"193":[11,30,11,36],"201":[11,38,11,43],"209":[11,29,11,44],"217":[12,30,12,34],"225":[12,36,12,41],"233":[12,29,12,42],"241":[5,17,13,18],"249":[14,32,14,39],"257":[14,41,14,50],"265":[14,31,14,51],"273":[15,28,15,35],"281":[15,37,15,40],"289":[15,27,15,41],"297":[16,27,16,35],"305":[16,37,16,45],"313":[16,26,16,46],"321":[17,27,17,35],"329":[17,26,17,36],"337":[18,27,18,35],"345":[18,26,18,36],"353":[14,18,19,19],"361":[24,14,24,18],"369":[24,19,24,28],"377":[24,30,24,40],"385":[24,42,24,49],"393":[24,42,24,54],"401":[24,56,24,57],"409":[24,14,24,58],"417":[2,12,2,27],"425":[2,12,2,27],"433":[3,14,3,38],"441":[3,14,3,38],"449":[4,12,4,27],"457":[4,12,4,27],"465":[5,17,13,18],"473":[5,17,13,18],"481":[14,18,19,19],"489":[14,18,19,19],"497":[24,14,24,58],"505":[24,14,24,58],"513":[25,1,25,8],"521":[25,13,25,19],"529":[25,1,25,20],"531":[25,1,25,12],"537":[25,1,25,20],"545":[1,1,26,1],"553":[1,1,26,1],"561":[1,1,26,1],"569":[1,1,26,1],"577":[1,1,26,1],"585":[1,1,26,1],"593":[1,1,26,1],"601":[1,1,26,1],"609":[1,1,26,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// my-program.js\nvar nopt = require(\"nopt\")\n  , Stream = require(\"stream\").Stream\n  , path = require(\"path\")\n  , knownOpts = { \"foo\" : [String, null]\n                , \"bar\" : [Stream, Number]\n                , \"baz\" : path\n                , \"bloo\" : [ \"big\", \"medium\", \"small\" ]\n                , \"flag\" : Boolean\n                , \"pick\" : Boolean\n                , \"many1\" : [String, Array]\n                , \"many2\" : [path, Array]\n                }\n  , shortHands = { \"foofoo\" : [\"--foo\", \"Mr. Foo\"]\n                 , \"b7\" : [\"--bar\", \"7\"]\n                 , \"m\" : [\"--bloo\", \"medium\"]\n                 , \"p\" : [\"--pick\"]\n                 , \"f\" : [\"--flag\"]\n                 }\n             // everything is optional.\n             // knownOpts and shorthands default to {}\n             // arg list defaults to process.argv\n             // slice defaults to 2\n  , parsed = nopt(knownOpts, shortHands, process.argv, 2)\nconsole.log(parsed)\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(545, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(553, 'nopt', nopt, 0);
            J$.N(561, 'Stream', Stream, 0);
            J$.N(569, 'path', path, 0);
            J$.N(577, 'knownOpts', knownOpts, 0);
            J$.N(585, 'shortHands', shortHands, 0);
            J$.N(593, 'parsed', parsed, 0);
            var nopt = J$.X1(425, J$.W(417, 'nopt', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "nopt", 21, false)), nopt, 3)), Stream = J$.X1(441, J$.W(433, 'Stream', J$.G(57, J$.F(49, J$.R(33, 'require', require, 2), 0)(J$.T(41, "stream", 21, false)), 'Stream', 0), Stream, 3)), path = J$.X1(457, J$.W(449, 'path', J$.F(81, J$.R(65, 'require', require, 2), 0)(J$.T(73, "path", 21, false)), path, 3)), knownOpts = J$.X1(473, J$.W(465, 'knownOpts', J$.T(241, {
                    "foo": J$.T(105, [
                        J$.R(89, 'String', String, 2),
                        J$.T(97, null, 25, false)
                    ], 10, false),
                    "bar": J$.T(129, [
                        J$.R(113, 'Stream', Stream, 1),
                        J$.R(121, 'Number', Number, 2)
                    ], 10, false),
                    "baz": J$.R(137, 'path', path, 1),
                    "bloo": J$.T(169, [
                        J$.T(145, "big", 21, false),
                        J$.T(153, "medium", 21, false),
                        J$.T(161, "small", 21, false)
                    ], 10, false),
                    "flag": J$.R(177, 'Boolean', Boolean, 2),
                    "pick": J$.R(185, 'Boolean', Boolean, 2),
                    "many1": J$.T(209, [
                        J$.R(193, 'String', String, 2),
                        J$.R(201, 'Array', Array, 2)
                    ], 10, false),
                    "many2": J$.T(233, [
                        J$.R(217, 'path', path, 1),
                        J$.R(225, 'Array', Array, 2)
                    ], 10, false)
                }, 11, false), knownOpts, 3)), shortHands = J$.X1(489, J$.W(481, 'shortHands', J$.T(353, {
                    "foofoo": J$.T(265, [
                        J$.T(249, "--foo", 21, false),
                        J$.T(257, "Mr. Foo", 21, false)
                    ], 10, false),
                    "b7": J$.T(289, [
                        J$.T(273, "--bar", 21, false),
                        J$.T(281, "7", 21, false)
                    ], 10, false),
                    "m": J$.T(313, [
                        J$.T(297, "--bloo", 21, false),
                        J$.T(305, "medium", 21, false)
                    ], 10, false),
                    "p": J$.T(329, [J$.T(321, "--pick", 21, false)], 10, false),
                    "f": J$.T(345, [J$.T(337, "--flag", 21, false)], 10, false)
                }, 11, false), shortHands, 3)), parsed = J$.X1(505, J$.W(497, 'parsed', J$.F(409, J$.R(361, 'nopt', nopt, 1), 0)(J$.R(369, 'knownOpts', knownOpts, 1), J$.R(377, 'shortHands', shortHands, 1), J$.G(393, J$.R(385, 'process', process, 2), 'argv', 0), J$.T(401, 2, 22, false)), parsed, 3));
            J$.X1(537, J$.M(529, J$.R(513, 'console', console, 2), 'log', 0)(J$.R(521, 'parsed', parsed, 1)));
        } catch (J$e) {
            J$.Ex(601, J$e);
        } finally {
            if (J$.Sr(609)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
