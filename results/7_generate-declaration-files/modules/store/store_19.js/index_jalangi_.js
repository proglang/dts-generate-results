J$.iids = {"9":[2,13,2,20],"10":[4,1,4,35],"17":[2,21,2,28],"25":[2,13,2,29],"33":[2,13,2,29],"41":[2,13,2,29],"49":[3,1,3,6],"57":[3,11,3,17],"65":[3,26,3,34],"73":[3,19,3,36],"81":[3,1,3,37],"83":[3,1,3,10],"89":[3,1,3,37],"97":[4,1,4,6],"105":[4,11,4,17],"113":[4,1,4,18],"115":[4,1,4,10],"121":[4,1,4,23],"129":[4,27,4,35],"137":[4,1,4,35],"145":[1,1,5,1],"153":[1,1,5,1],"161":[1,1,5,1],"169":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"// Example store.js usage with npm\nvar store = require('store')\nstore.set('user', { name:'Marcus' })\nstore.get('user').name == 'Marcus'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(145, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(153, 'store', store, 0);
            var store = J$.X1(41, J$.W(33, 'store', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'store', 21, false)), store, 3));
            J$.X1(89, J$.M(81, J$.R(49, 'store', store, 1), 'set', 0)(J$.T(57, 'user', 21, false), J$.T(73, {
                name: J$.T(65, 'Marcus', 21, false)
            }, 11, false)));
            J$.X1(137, J$.B(10, '==', J$.G(121, J$.M(113, J$.R(97, 'store', store, 1), 'get', 0)(J$.T(105, 'user', 21, false)), 'name', 0), J$.T(129, 'Marcus', 21, false), 0));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
