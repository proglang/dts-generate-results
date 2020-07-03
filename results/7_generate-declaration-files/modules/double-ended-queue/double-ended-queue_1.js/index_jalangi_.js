J$.iids = {"9":[1,13,1,20],"17":[1,21,1,41],"25":[1,13,1,42],"33":[1,13,1,42],"41":[1,13,1,42],"49":[3,17,3,22],"57":[3,24,3,25],"65":[3,26,3,27],"73":[3,28,3,29],"81":[3,30,3,31],"89":[3,23,3,32],"97":[3,13,3,33],"105":[3,13,3,33],"113":[3,13,3,33],"121":[4,1,4,6],"129":[4,1,4,14],"131":[4,1,4,12],"137":[4,1,4,15],"145":[5,1,5,6],"153":[5,1,5,12],"155":[5,1,5,10],"161":[5,1,5,13],"169":[1,1,6,1],"177":[1,1,6,1],"185":[1,1,6,1],"193":[1,1,6,1],"201":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var Deque = require(\"double-ended-queue\");\n\nvar deque = new Deque([1,2,3,4]);\ndeque.shift(); //1\ndeque.pop(); //4\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'Deque', Deque, 0);
            J$.N(185, 'deque', deque, 0);
            var Deque = J$.X1(41, J$.W(33, 'Deque', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "double-ended-queue", 21, false)), Deque, 3));
            var deque = J$.X1(113, J$.W(105, 'deque', J$.F(97, J$.R(49, 'Deque', Deque, 1), 1)(J$.T(89, [
                J$.T(57, 1, 22, false),
                J$.T(65, 2, 22, false),
                J$.T(73, 3, 22, false),
                J$.T(81, 4, 22, false)
            ], 10, false)), deque, 3));
            J$.X1(137, J$.M(129, J$.R(121, 'deque', deque, 1), 'shift', 0)());
            J$.X1(161, J$.M(153, J$.R(145, 'deque', deque, 1), 'pop', 0)());
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
