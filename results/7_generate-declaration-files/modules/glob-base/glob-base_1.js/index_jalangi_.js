J$.iids = {"9":[1,16,1,23],"17":[1,24,1,35],"25":[1,16,1,36],"33":[1,16,1,36],"41":[1,16,1,36],"49":[3,1,3,9],"57":[3,10,3,21],"65":[3,1,3,22],"73":[3,1,3,23],"81":[6,1,6,9],"89":[6,10,6,20],"97":[6,1,6,21],"105":[6,1,6,22],"113":[9,1,9,9],"121":[9,10,9,27],"129":[9,1,9,28],"137":[9,1,9,29],"145":[12,1,12,9],"153":[12,10,12,23],"161":[12,1,12,24],"169":[12,1,12,25],"177":[15,1,15,9],"185":[15,10,15,22],"193":[15,1,15,23],"201":[15,1,15,24],"209":[18,1,18,9],"217":[18,10,18,23],"225":[18,1,18,24],"233":[18,1,18,25],"241":[21,1,21,9],"249":[21,10,21,21],"257":[21,1,21,22],"265":[21,1,21,23],"273":[24,1,24,9],"281":[24,10,24,21],"289":[24,1,24,22],"297":[24,1,24,23],"305":[27,1,27,9],"313":[27,10,27,16],"321":[27,1,27,17],"329":[27,1,27,18],"337":[30,1,30,9],"345":[30,10,30,29],"353":[30,1,30,30],"361":[30,1,30,31],"369":[33,1,33,9],"377":[33,10,33,12],"385":[33,1,33,13],"393":[33,1,33,14],"401":[36,1,36,9],"409":[36,10,36,19],"417":[36,1,36,20],"425":[36,1,36,21],"433":[39,1,39,9],"441":[39,10,39,23],"449":[39,1,39,24],"457":[39,1,39,25],"465":[42,1,42,9],"473":[42,10,42,17],"481":[42,1,42,18],"489":[42,1,42,19],"497":[45,1,45,9],"505":[45,10,45,16],"513":[45,1,45,17],"521":[45,1,45,18],"529":[48,1,48,9],"537":[48,10,48,15],"545":[48,1,48,16],"553":[48,1,48,17],"561":[51,1,51,9],"569":[51,10,51,20],"577":[51,1,51,21],"585":[51,1,51,22],"593":[54,1,54,9],"601":[54,10,54,15],"609":[54,1,54,16],"617":[54,1,54,17],"625":[57,1,57,9],"633":[57,10,57,14],"641":[57,1,57,15],"649":[57,1,57,16],"657":[60,1,60,9],"665":[60,10,60,13],"673":[60,1,60,14],"681":[60,1,60,15],"689":[63,1,63,9],"697":[63,10,63,14],"705":[63,1,63,15],"713":[63,1,63,16],"721":[66,1,66,9],"729":[66,10,66,15],"737":[66,1,66,16],"745":[66,1,66,17],"753":[69,1,69,9],"761":[69,10,69,14],"769":[69,1,69,15],"777":[69,1,69,16],"785":[72,1,72,9],"793":[72,10,72,25],"801":[72,1,72,26],"809":[72,1,72,27],"817":[75,1,75,9],"825":[75,10,75,19],"833":[75,1,75,20],"841":[75,1,75,21],"849":[78,1,78,9],"857":[78,10,78,13],"865":[78,1,78,14],"873":[78,1,78,15],"881":[81,1,81,9],"889":[81,10,81,20],"897":[81,1,81,21],"905":[81,1,81,22],"913":[84,1,84,9],"921":[84,10,84,14],"929":[84,1,84,15],"937":[84,1,84,16],"945":[87,1,87,9],"953":[87,10,87,28],"961":[87,1,87,29],"969":[87,1,87,30],"977":[90,1,90,9],"985":[90,10,90,22],"993":[90,1,90,23],"1001":[90,1,90,24],"1009":[93,1,93,9],"1017":[93,10,93,20],"1025":[93,1,93,21],"1033":[93,1,93,22],"1041":[96,1,96,9],"1049":[96,10,96,21],"1057":[96,1,96,22],"1065":[96,1,96,23],"1073":[99,1,99,9],"1081":[99,10,99,15],"1089":[99,1,99,16],"1097":[99,1,99,17],"1105":[102,1,102,9],"1113":[102,10,102,14],"1121":[102,1,102,15],"1129":[102,1,102,16],"1137":[105,1,105,9],"1145":[105,10,105,16],"1153":[105,1,105,17],"1161":[105,1,105,18],"1169":[1,1,107,1],"1177":[1,1,107,1],"1185":[1,1,107,1],"1193":[1,1,107,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var globBase = require('glob-base');\n\nglobBase('a/b/.git/');\n//=> { base: 'a/b/.git/', isGlob: false, glob: '' })\n\nglobBase('a/b/**/e');\n//=> { base: 'a/b', isGlob: true, glob: '**/e' }\n\nglobBase('a/b/*.{foo,bar}');\n//=> { base: 'a/b', isGlob: true, glob: '*.{foo,bar}' }\n\nglobBase('a/b/.git/**');\n//=> { base: 'a/b/.git', isGlob: true, glob: '**' }\n\nglobBase('a/b/c/*.md');\n//=> { base: 'a/b/c', isGlob: true, glob: '*.md' }\n\nglobBase('a/b/c/.*.md');\n//=> { base: 'a/b/c', isGlob: true, glob: '.*.md' }\n\nglobBase('a/b/{c,d}');\n//=> { base: 'a/b', isGlob: true, glob: '{c,d}' }\n\nglobBase('!*.min.js');\n//=> { base: '.', isGlob: true, glob: '!*.min.js' }\n\nglobBase('!foo');\n//=> { base: '.', isGlob: true, glob: '!foo' }\n\nglobBase('!foo/(a|b).min.js');\n//=> { base: '.', isGlob: true, glob: '!foo/(a|b).min.js' }\n\nglobBase('');\n//=> { base: '.', isGlob: false, glob: '' }\n\nglobBase('**/*.md');\n//=> { base: '.', isGlob: true, glob: '**/*.md' }\n\nglobBase('**/*.min.js');\n//=> { base: '.', isGlob: true, glob: '**/*.min.js' }\n\nglobBase('**/.*');\n//=> { base: '.', isGlob: true, glob: '**/.*' }\n\nglobBase('**/d');\n//=> { base: '.', isGlob: true, glob: '**/d' }\n\nglobBase('*.*');\n//=> { base: '.', isGlob: true, glob: '*.*' }\n\nglobBase('*.min.js');\n//=> { base: '.', isGlob: true, glob: '*.min.js' }\n\nglobBase('*/*');\n//=> { base: '.', isGlob: true, glob: '*/*' }\n\nglobBase('*b');\n//=> { base: '.', isGlob: true, glob: '*b' }\n\nglobBase('.');\n//=> { base: '.', isGlob: false, glob: '.' }\n\nglobBase('.*');\n//=> { base: '.', isGlob: true, glob: '.*' }\n\nglobBase('./*');\n//=> { base: '.', isGlob: true, glob: '*' }\n\nglobBase('/a');\n//=> { base: '/', isGlob: false, glob: 'a' }\n\nglobBase('@(a|b)/e.f.g/');\n//=> { base: '.', isGlob: true, glob: '@(a|b)/e.f.g/' }\n\nglobBase('[a-c]b*');\n//=> { base: '.', isGlob: true, glob: '[a-c]b*' }\n\nglobBase('a');\n//=> { base: '.', isGlob: false, glob: 'a' }\n\nglobBase('a.min.js');\n//=> { base: '.', isGlob: false, glob: 'a.min.js' }\n\nglobBase('a/');\n//=> { base: 'a/', isGlob: false, glob: '' }\n\nglobBase('a/**/j/**/z/*.md');\n//=> { base: 'a', isGlob: true, glob: '**/j/**/z/*.md' }\n\nglobBase('a/*/c/*.md');\n//=> { base: 'a', isGlob: true, glob: '*/c/*.md' }\n\nglobBase('a/?/c.md');\n//=> { base: 'a', isGlob: true, glob: '?/c.md' }\n\nglobBase('a/??/c.js');\n//=> { base: 'a', isGlob: true, glob: '??/c.js' }\n\nglobBase('a?b');\n//=> { base: '.', isGlob: true, glob: 'a?b' }\n\nglobBase('bb');\n//=> { base: '.', isGlob: false, glob: 'bb' }\n\nglobBase('c.md');\n//=> { base: '.', isGlob: false, glob: 'c.md' }\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(1169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(1177, 'globBase', globBase, 0);
            var globBase = J$.X1(41, J$.W(33, 'globBase', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'glob-base', 21, false)), globBase, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'globBase', globBase, 1), 0)(J$.T(57, 'a/b/.git/', 21, false)));
            J$.X1(105, J$.F(97, J$.R(81, 'globBase', globBase, 1), 0)(J$.T(89, 'a/b/**/e', 21, false)));
            J$.X1(137, J$.F(129, J$.R(113, 'globBase', globBase, 1), 0)(J$.T(121, 'a/b/*.{foo,bar}', 21, false)));
            J$.X1(169, J$.F(161, J$.R(145, 'globBase', globBase, 1), 0)(J$.T(153, 'a/b/.git/**', 21, false)));
            J$.X1(201, J$.F(193, J$.R(177, 'globBase', globBase, 1), 0)(J$.T(185, 'a/b/c/*.md', 21, false)));
            J$.X1(233, J$.F(225, J$.R(209, 'globBase', globBase, 1), 0)(J$.T(217, 'a/b/c/.*.md', 21, false)));
            J$.X1(265, J$.F(257, J$.R(241, 'globBase', globBase, 1), 0)(J$.T(249, 'a/b/{c,d}', 21, false)));
            J$.X1(297, J$.F(289, J$.R(273, 'globBase', globBase, 1), 0)(J$.T(281, '!*.min.js', 21, false)));
            J$.X1(329, J$.F(321, J$.R(305, 'globBase', globBase, 1), 0)(J$.T(313, '!foo', 21, false)));
            J$.X1(361, J$.F(353, J$.R(337, 'globBase', globBase, 1), 0)(J$.T(345, '!foo/(a|b).min.js', 21, false)));
            J$.X1(393, J$.F(385, J$.R(369, 'globBase', globBase, 1), 0)(J$.T(377, '', 21, false)));
            J$.X1(425, J$.F(417, J$.R(401, 'globBase', globBase, 1), 0)(J$.T(409, '**/*.md', 21, false)));
            J$.X1(457, J$.F(449, J$.R(433, 'globBase', globBase, 1), 0)(J$.T(441, '**/*.min.js', 21, false)));
            J$.X1(489, J$.F(481, J$.R(465, 'globBase', globBase, 1), 0)(J$.T(473, '**/.*', 21, false)));
            J$.X1(521, J$.F(513, J$.R(497, 'globBase', globBase, 1), 0)(J$.T(505, '**/d', 21, false)));
            J$.X1(553, J$.F(545, J$.R(529, 'globBase', globBase, 1), 0)(J$.T(537, '*.*', 21, false)));
            J$.X1(585, J$.F(577, J$.R(561, 'globBase', globBase, 1), 0)(J$.T(569, '*.min.js', 21, false)));
            J$.X1(617, J$.F(609, J$.R(593, 'globBase', globBase, 1), 0)(J$.T(601, '*/*', 21, false)));
            J$.X1(649, J$.F(641, J$.R(625, 'globBase', globBase, 1), 0)(J$.T(633, '*b', 21, false)));
            J$.X1(681, J$.F(673, J$.R(657, 'globBase', globBase, 1), 0)(J$.T(665, '.', 21, false)));
            J$.X1(713, J$.F(705, J$.R(689, 'globBase', globBase, 1), 0)(J$.T(697, '.*', 21, false)));
            J$.X1(745, J$.F(737, J$.R(721, 'globBase', globBase, 1), 0)(J$.T(729, './*', 21, false)));
            J$.X1(777, J$.F(769, J$.R(753, 'globBase', globBase, 1), 0)(J$.T(761, '/a', 21, false)));
            J$.X1(809, J$.F(801, J$.R(785, 'globBase', globBase, 1), 0)(J$.T(793, '@(a|b)/e.f.g/', 21, false)));
            J$.X1(841, J$.F(833, J$.R(817, 'globBase', globBase, 1), 0)(J$.T(825, '[a-c]b*', 21, false)));
            J$.X1(873, J$.F(865, J$.R(849, 'globBase', globBase, 1), 0)(J$.T(857, 'a', 21, false)));
            J$.X1(905, J$.F(897, J$.R(881, 'globBase', globBase, 1), 0)(J$.T(889, 'a.min.js', 21, false)));
            J$.X1(937, J$.F(929, J$.R(913, 'globBase', globBase, 1), 0)(J$.T(921, 'a/', 21, false)));
            J$.X1(969, J$.F(961, J$.R(945, 'globBase', globBase, 1), 0)(J$.T(953, 'a/**/j/**/z/*.md', 21, false)));
            J$.X1(1001, J$.F(993, J$.R(977, 'globBase', globBase, 1), 0)(J$.T(985, 'a/*/c/*.md', 21, false)));
            J$.X1(1033, J$.F(1025, J$.R(1009, 'globBase', globBase, 1), 0)(J$.T(1017, 'a/?/c.md', 21, false)));
            J$.X1(1065, J$.F(1057, J$.R(1041, 'globBase', globBase, 1), 0)(J$.T(1049, 'a/??/c.js', 21, false)));
            J$.X1(1097, J$.F(1089, J$.R(1073, 'globBase', globBase, 1), 0)(J$.T(1081, 'a?b', 21, false)));
            J$.X1(1129, J$.F(1121, J$.R(1105, 'globBase', globBase, 1), 0)(J$.T(1113, 'bb', 21, false)));
            J$.X1(1161, J$.F(1153, J$.R(1137, 'globBase', globBase, 1), 0)(J$.T(1145, 'c.md', 21, false)));
        } catch (J$e) {
            J$.Ex(1185, J$e);
        } finally {
            if (J$.Sr(1193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
