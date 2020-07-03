J$.iids = {"9":[1,15,1,22],"17":[1,23,1,33],"25":[1,15,1,34],"33":[1,15,1,34],"41":[1,15,1,34],"49":[2,1,2,8],"57":[2,13,2,20],"65":[2,28,2,35],"73":[2,37,2,45],"81":[2,13,2,46],"83":[2,13,2,27],"89":[2,1,2,47],"91":[2,1,2,12],"97":[2,1,2,48],"105":[4,14,4,21],"113":[4,29,4,40],"121":[4,14,4,41],"123":[4,14,4,28],"129":[4,14,4,41],"137":[4,14,4,41],"145":[5,1,5,8],"153":[5,13,5,19],"161":[5,13,5,28],"169":[5,1,5,29],"171":[5,1,5,12],"177":[5,1,5,30],"185":[6,1,6,8],"193":[6,13,6,19],"201":[6,13,6,29],"209":[6,1,6,30],"211":[6,1,6,12],"217":[6,1,6,31],"225":[1,1,7,1],"233":[1,1,7,1],"241":[1,1,7,1],"249":[1,1,7,1],"257":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var geohash = require('ngeohash');\nconsole.log(geohash.encode(37.8324, 112.5584));\n// prints ww8p1r4t8\nvar latlon = geohash.decode('ww8p1r4t8');\nconsole.log(latlon.latitude);\nconsole.log(latlon.longitude);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'geohash', geohash, 0);
            J$.N(241, 'latlon', latlon, 0);
            var geohash = J$.X1(41, J$.W(33, 'geohash', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'ngeohash', 21, false)), geohash, 3));
            J$.X1(97, J$.M(89, J$.R(49, 'console', console, 2), 'log', 0)(J$.M(81, J$.R(57, 'geohash', geohash, 1), 'encode', 0)(J$.T(65, 37.8324, 22, false), J$.T(73, 112.5584, 22, false))));
            var latlon = J$.X1(137, J$.W(129, 'latlon', J$.M(121, J$.R(105, 'geohash', geohash, 1), 'decode', 0)(J$.T(113, 'ww8p1r4t8', 21, false)), latlon, 3));
            J$.X1(177, J$.M(169, J$.R(145, 'console', console, 2), 'log', 0)(J$.G(161, J$.R(153, 'latlon', latlon, 1), 'latitude', 0)));
            J$.X1(217, J$.M(209, J$.R(185, 'console', console, 2), 'log', 0)(J$.G(201, J$.R(193, 'latlon', latlon, 1), 'longitude', 0)));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
