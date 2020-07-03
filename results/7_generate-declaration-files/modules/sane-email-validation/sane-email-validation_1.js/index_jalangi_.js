J$.iids = {"8":[4,5,4,19],"9":[1,15,1,22],"17":[1,23,1,46],"25":[1,15,1,47],"33":[1,15,1,47],"41":[1,15,1,47],"49":[2,13,2,18],"57":[2,13,2,18],"65":[2,13,2,18],"73":[4,5,4,12],"81":[4,13,4,18],"89":[4,5,4,19],"97":[5,3,5,10],"105":[5,18,5,23],"113":[5,3,5,36],"115":[5,3,5,14],"121":[5,3,5,36],"129":[7,3,7,10],"137":[7,18,7,23],"145":[7,3,7,40],"147":[7,3,7,14],"153":[7,3,7,40],"161":[1,1,9,1],"169":[1,1,9,1],"177":[1,1,9,1],"185":[4,1,8,2],"193":[1,1,9,1],"201":[1,1,9,1],"nBranches":2,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var isEmail = require('sane-email-validation')\nvar email = '...'\n\nif (isEmail(email)) {\n  console.log(`${email} is valid.`)\n} else {\n  console.log(`${email} is not valid.`)\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(169, 'isEmail', isEmail, 0);
            J$.N(177, 'email', email, 0);
            var isEmail = J$.X1(41, J$.W(33, 'isEmail', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'sane-email-validation', 21, false)), isEmail, 3));
            var email = J$.X1(65, J$.W(57, 'email', J$.T(49, '...', 21, false), email, 3));
            if (J$.X1(185, J$.C(8, J$.F(89, J$.R(73, 'isEmail', isEmail, 1), 0)(J$.R(81, 'email', email, 1))))) {
                J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(`${ J$.R(105, 'email', email, 1) } is valid.`));
            } else {
                J$.X1(153, J$.M(145, J$.R(129, 'console', console, 2), 'log', 0)(`${ J$.R(137, 'email', email, 1) } is not valid.`));
            }
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
