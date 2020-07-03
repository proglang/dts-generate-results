J$.iids = {"8":[5,5,5,41],"9":[1,13,1,20],"10":[5,5,5,41],"16":[9,5,9,26],"17":[1,21,1,37],"25":[1,13,1,38],"33":[1,13,1,38],"41":[1,13,1,38],"49":[3,24,3,29],"57":[3,37,3,43],"65":[3,24,3,44],"67":[3,24,3,36],"73":[3,24,3,44],"81":[3,24,3,44],"89":[5,6,5,22],"97":[5,6,5,41],"105":[6,3,6,26],"113":[6,3,6,28],"121":[6,3,6,29],"129":[9,5,9,21],"137":[9,5,9,26],"145":[10,3,10,10],"153":[10,15,10,31],"161":[10,15,10,36],"169":[10,15,10,41],"177":[10,3,10,42],"179":[10,3,10,14],"185":[10,3,10,43],"193":[1,1,12,1],"201":[1,1,12,1],"209":[1,1,12,1],"217":[5,1,7,2],"225":[9,1,11,2],"233":[1,1,12,1],"241":[1,1,12,1],"nBranches":4,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var valid = require('card-validator');\n\nvar numberValidation = valid.number('4111');\n\nif (!numberValidation.isPotentiallyValid) {\n  renderInvalidCardNumber();\n}\n\nif (numberValidation.card) {\n  console.log(numberValidation.card.type); // 'visa'\n}\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'valid', valid, 0);
            J$.N(209, 'numberValidation', numberValidation, 0);
            var valid = J$.X1(41, J$.W(33, 'valid', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'card-validator', 21, false)), valid, 3));
            var numberValidation = J$.X1(81, J$.W(73, 'numberValidation', J$.M(65, J$.R(49, 'valid', valid, 1), 'number', 0)(J$.T(57, '4111', 21, false)), numberValidation, 3));
            if (J$.X1(217, J$.C(8, J$.U(10, '!', J$.G(97, J$.R(89, 'numberValidation', numberValidation, 1), 'isPotentiallyValid', 0))))) {
                J$.X1(121, J$.F(113, J$.R(105, 'renderInvalidCardNumber', renderInvalidCardNumber, 2), 0)());
            }
            if (J$.X1(225, J$.C(16, J$.G(137, J$.R(129, 'numberValidation', numberValidation, 1), 'card', 0)))) {
                J$.X1(185, J$.M(177, J$.R(145, 'console', console, 2), 'log', 0)(J$.G(169, J$.G(161, J$.R(153, 'numberValidation', numberValidation, 1), 'card', 0), 'type', 0)));
            }
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
