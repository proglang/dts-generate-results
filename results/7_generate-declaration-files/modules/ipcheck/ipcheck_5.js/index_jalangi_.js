J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[2,14,2,21],"57":[2,22,2,35],"65":[2,10,2,36],"73":[2,10,2,36],"81":[2,10,2,36],"89":[3,16,3,23],"97":[3,24,3,40],"105":[3,12,3,41],"113":[3,12,3,41],"121":[3,12,3,41],"129":[5,1,5,3],"137":[5,10,5,14],"145":[5,1,5,15],"147":[5,1,5,9],"153":[5,1,5,16],"161":[1,1,6,1],"169":[1,1,6,1],"177":[1,1,6,1],"185":[1,1,6,1],"193":[1,1,6,1],"201":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var IPCheck = require('ipcheck');\nvar ip = new IPCheck('192.168.0.1');\nvar cidr = new IPCheck('192.168.0.1/32');\n\nip.match(cidr); //= true\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(169, 'IPCheck', IPCheck, 0);
            J$.N(177, 'ip', ip, 0);
            J$.N(185, 'cidr', cidr, 0);
            var IPCheck = J$.X1(41, J$.W(33, 'IPCheck', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'ipcheck', 21, false)), IPCheck, 3));
            var ip = J$.X1(81, J$.W(73, 'ip', J$.F(65, J$.R(49, 'IPCheck', IPCheck, 1), 1)(J$.T(57, '192.168.0.1', 21, false)), ip, 3));
            var cidr = J$.X1(121, J$.W(113, 'cidr', J$.F(105, J$.R(89, 'IPCheck', IPCheck, 1), 1)(J$.T(97, '192.168.0.1/32', 21, false)), cidr, 3));
            J$.X1(153, J$.M(145, J$.R(129, 'ip', ip, 1), 'match', 0)(J$.R(137, 'cidr', cidr, 1)));
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
