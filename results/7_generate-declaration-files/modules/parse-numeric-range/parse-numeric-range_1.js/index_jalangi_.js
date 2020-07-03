J$.iids = {"9":[1,19,1,26],"10":[5,13,5,39],"17":[1,27,1,48],"18":[5,13,5,68],"25":[1,19,1,49],"26":[5,13,5,86],"33":[1,19,1,49],"41":[1,19,1,49],"49":[3,12,3,23],"57":[3,30,3,61],"65":[3,12,3,62],"67":[3,12,3,29],"73":[3,12,3,62],"81":[3,12,3,62],"89":[5,1,5,8],"97":[5,13,5,25],"105":[5,28,5,32],"113":[5,28,5,39],"121":[5,42,5,68],"129":[5,71,5,75],"137":[5,81,5,85],"145":[5,71,5,86],"147":[5,71,5,80],"153":[5,1,5,87],"155":[5,1,5,12],"161":[5,1,5,88],"169":[1,1,6,1],"177":[1,1,6,1],"185":[1,1,6,1],"193":[1,1,6,1],"201":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var rangeParser = require('parse-numeric-range');\n\nvar nums = rangeParser.parse('4,6,8-10,12,14..16,18,20...23');\n\nconsole.log(\"The first \" + nums.length + \" composite numbers are: \" + nums.join(', '));\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'rangeParser', rangeParser, 0);
            J$.N(185, 'nums', nums, 0);
            var rangeParser = J$.X1(41, J$.W(33, 'rangeParser', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'parse-numeric-range', 21, false)), rangeParser, 3));
            var nums = J$.X1(81, J$.W(73, 'nums', J$.M(65, J$.R(49, 'rangeParser', rangeParser, 1), 'parse', 0)(J$.T(57, '4,6,8-10,12,14..16,18,20...23', 21, false)), nums, 3));
            J$.X1(161, J$.M(153, J$.R(89, 'console', console, 2), 'log', 0)(J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.T(97, "The first ", 21, false), J$.G(113, J$.R(105, 'nums', nums, 1), 'length', 0), 0), J$.T(121, " composite numbers are: ", 21, false), 0), J$.M(145, J$.R(129, 'nums', nums, 1), 'join', 0)(J$.T(137, ', ', 21, false)), 0)));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
