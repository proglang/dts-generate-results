J$.iids = {"9":[2,12,2,13],"17":[2,15,2,16],"25":[2,18,2,19],"33":[2,21,2,22],"41":[2,24,2,25],"49":[2,27,2,28],"57":[2,11,2,29],"65":[2,11,2,29],"73":[2,11,2,29],"81":[4,1,4,8],"89":[4,9,4,15],"97":[4,1,4,16],"105":[4,17,4,20],"113":[4,1,4,21],"121":[4,1,4,21],"129":[5,1,5,8],"137":[5,13,5,16],"145":[5,1,5,17],"147":[5,1,5,12],"153":[5,1,5,17],"161":[1,1,11,1],"169":[1,1,11,1],"177":[1,1,11,1],"185":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"\nvar arr = [1, 1, 2, 2, 3, 5]\n\nrequire(\"uniq\")(arr)\nconsole.log(arr)\n\n//Prints:\n//\n//  1,2,3,5\n//\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(169, 'arr', arr, 0);
            var arr = J$.X1(73, J$.W(65, 'arr', J$.T(57, [
                J$.T(9, 1, 22, false),
                J$.T(17, 1, 22, false),
                J$.T(25, 2, 22, false),
                J$.T(33, 2, 22, false),
                J$.T(41, 3, 22, false),
                J$.T(49, 5, 22, false)
            ], 10, false), arr, 3));
            J$.X1(121, J$.F(113, J$.F(97, J$.R(81, 'require', require, 2), 0)(J$.T(89, "uniq", 21, false)), 0)(J$.R(105, 'arr', arr, 1)));
            J$.X1(153, J$.M(145, J$.R(129, 'console', console, 2), 'log', 0)(J$.R(137, 'arr', arr, 1)));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
