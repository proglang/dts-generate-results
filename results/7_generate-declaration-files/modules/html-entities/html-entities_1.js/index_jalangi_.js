J$.iids = {"9":[1,16,1,23],"17":[1,24,1,39],"25":[1,16,1,40],"33":[1,16,1,52],"41":[1,16,1,52],"49":[1,16,1,52],"57":[3,20,3,28],"65":[3,16,3,30],"73":[3,16,3,30],"81":[3,16,3,30],"89":[5,1,5,8],"97":[5,13,5,21],"105":[5,29,5,39],"113":[5,13,5,40],"115":[5,13,5,28],"121":[5,1,5,41],"123":[5,1,5,12],"129":[5,1,5,42],"137":[6,1,6,8],"145":[6,13,6,21],"153":[6,35,6,45],"161":[6,13,6,46],"163":[6,13,6,34],"169":[6,1,6,47],"171":[6,1,6,12],"177":[6,1,6,48],"185":[7,1,7,8],"193":[7,13,7,21],"201":[7,37,7,47],"209":[7,13,7,48],"211":[7,13,7,36],"217":[7,1,7,49],"219":[7,1,7,12],"225":[7,1,7,50],"233":[8,1,8,8],"241":[8,13,8,21],"249":[8,29,8,74],"257":[8,13,8,75],"259":[8,13,8,28],"265":[8,1,8,76],"267":[8,1,8,12],"273":[8,1,8,77],"281":[1,1,9,1],"289":[1,1,9,1],"297":[1,1,9,1],"305":[1,1,9,1],"313":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Entities = require('html-entities').XmlEntities;\n\nvar entities = new Entities();\n\nconsole.log(entities.encode('<>\"\\'&©®')); // &lt;&gt;&quot;&apos;&amp;©®\nconsole.log(entities.encodeNonUTF('<>\"\\'&©®')); // &lt;&gt;&quot;&apos;&amp;&#169;&#174;\nconsole.log(entities.encodeNonASCII('<>\"\\'&©®')); // <>\"\\'&©®\nconsole.log(entities.decode('&lt;&gt;&quot;&apos;&amp;&copy;&reg;&#8710;')); // <>\"'&&copy;&reg;∆\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'Entities', Entities, 0);
            J$.N(297, 'entities', entities, 0);
            var Entities = J$.X1(49, J$.W(41, 'Entities', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'html-entities', 21, false)), 'XmlEntities', 0), Entities, 3));
            var entities = J$.X1(81, J$.W(73, 'entities', J$.F(65, J$.R(57, 'Entities', Entities, 1), 1)(), entities, 3));
            J$.X1(129, J$.M(121, J$.R(89, 'console', console, 2), 'log', 0)(J$.M(113, J$.R(97, 'entities', entities, 1), 'encode', 0)(J$.T(105, '<>"\'&©®', 21, false))));
            J$.X1(177, J$.M(169, J$.R(137, 'console', console, 2), 'log', 0)(J$.M(161, J$.R(145, 'entities', entities, 1), 'encodeNonUTF', 0)(J$.T(153, '<>"\'&©®', 21, false))));
            J$.X1(225, J$.M(217, J$.R(185, 'console', console, 2), 'log', 0)(J$.M(209, J$.R(193, 'entities', entities, 1), 'encodeNonASCII', 0)(J$.T(201, '<>"\'&©®', 21, false))));
            J$.X1(273, J$.M(265, J$.R(233, 'console', console, 2), 'log', 0)(J$.M(257, J$.R(241, 'entities', entities, 1), 'decode', 0)(J$.T(249, '&lt;&gt;&quot;&apos;&amp;&copy;&reg;&#8710;', 21, false))));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
