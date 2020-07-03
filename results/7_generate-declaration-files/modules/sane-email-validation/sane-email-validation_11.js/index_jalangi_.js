J$.iids = {"8":[4,5,4,22],"9":[1,18,1,25],"17":[1,26,1,49],"25":[1,18,1,50],"33":[1,18,1,61],"41":[1,18,1,61],"49":[1,18,1,61],"57":[2,13,2,18],"65":[2,13,2,18],"73":[2,13,2,18],"81":[4,5,4,15],"89":[4,16,4,21],"97":[4,5,4,22],"105":[5,3,5,10],"113":[5,18,5,23],"121":[5,3,5,40],"123":[5,3,5,14],"129":[5,3,5,40],"137":[7,3,7,10],"145":[7,18,7,23],"153":[7,3,7,36],"155":[7,3,7,14],"161":[7,3,7,36],"169":[1,1,9,1],"177":[1,1,9,1],"185":[1,1,9,1],"193":[4,1,8,2],"201":[1,1,9,1],"209":[1,1,9,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isNotEmail = require('sane-email-validation').isNotEmail\nvar email = '...'\n\nif (isNotEmail(email)) {\n  console.log(`${email} is not valid.`)\n} else {\n  console.log(`${email} is valid.`)\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(169, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(177, 'isNotEmail', isNotEmail, 0);
            J$.N(185, 'email', email, 0);
            var isNotEmail = J$.X1(49, J$.W(41, 'isNotEmail', J$.G(33, J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'sane-email-validation', 21, false)), 'isNotEmail', 0), isNotEmail, 3));
            var email = J$.X1(73, J$.W(65, 'email', J$.T(57, '...', 21, false), email, 3));
            if (J$.X1(193, J$.C(8, J$.F(97, J$.R(81, 'isNotEmail', isNotEmail, 1), 0)(J$.R(89, 'email', email, 1))))) {
                J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(`${ J$.R(113, 'email', email, 1) } is not valid.`));
            } else {
                J$.X1(161, J$.M(153, J$.R(137, 'console', console, 2), 'log', 0)(`${ J$.R(145, 'email', email, 1) } is valid.`));
            }
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
