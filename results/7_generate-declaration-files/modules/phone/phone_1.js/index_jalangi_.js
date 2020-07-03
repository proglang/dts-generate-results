J$.iids = {"9":[1,14,1,21],"17":[1,22,1,29],"25":[1,14,1,30],"33":[1,14,1,30],"41":[1,14,1,30],"49":[3,1,3,6],"57":[3,7,3,23],"65":[3,1,3,24],"73":[3,1,3,25],"81":[4,1,4,6],"89":[4,7,4,25],"97":[4,27,4,29],"105":[4,1,4,30],"113":[4,1,4,31],"121":[5,1,5,6],"129":[5,7,5,23],"137":[5,25,5,30],"145":[5,1,5,31],"153":[5,1,5,32],"161":[6,1,6,6],"169":[6,7,6,23],"177":[6,25,6,30],"185":[6,1,6,31],"193":[6,1,6,32],"201":[7,1,7,6],"209":[7,7,7,25],"217":[7,27,7,32],"225":[7,1,7,33],"233":[7,1,7,34],"241":[8,1,8,6],"249":[8,7,8,18],"257":[8,20,8,25],"265":[8,1,8,26],"273":[8,1,8,27],"281":[1,1,9,1],"289":[1,1,9,1],"297":[1,1,9,1],"305":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var phone  = require('phone');\n\nphone('+852 6569-8900'); // return ['+85265698900', 'HKG']\nphone('+1(817) 569-8900', ''); // return ['+18175698900', 'USA']\nphone('(817) 569-8900', 'USA'); // return ['+18175698900', 'USA']\nphone('(817) 569-8900', 'HKG'); // return []\nphone('+1(817) 569-8900', 'HKG'); // return [], as it is not a valid HKG mobile phone number\nphone('6123-6123', 'HKG'); // return ['+85261236123', 'HKG']\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(289, 'phone', phone, 0);
            var phone = J$.X1(41, J$.W(33, 'phone', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'phone', 21, false)), phone, 3));
            J$.X1(73, J$.F(65, J$.R(49, 'phone', phone, 1), 0)(J$.T(57, '+852 6569-8900', 21, false)));
            J$.X1(113, J$.F(105, J$.R(81, 'phone', phone, 1), 0)(J$.T(89, '+1(817) 569-8900', 21, false), J$.T(97, '', 21, false)));
            J$.X1(153, J$.F(145, J$.R(121, 'phone', phone, 1), 0)(J$.T(129, '(817) 569-8900', 21, false), J$.T(137, 'USA', 21, false)));
            J$.X1(193, J$.F(185, J$.R(161, 'phone', phone, 1), 0)(J$.T(169, '(817) 569-8900', 21, false), J$.T(177, 'HKG', 21, false)));
            J$.X1(233, J$.F(225, J$.R(201, 'phone', phone, 1), 0)(J$.T(209, '+1(817) 569-8900', 21, false), J$.T(217, 'HKG', 21, false)));
            J$.X1(273, J$.F(265, J$.R(241, 'phone', phone, 1), 0)(J$.T(249, '6123-6123', 21, false), J$.T(257, 'HKG', 21, false)));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
