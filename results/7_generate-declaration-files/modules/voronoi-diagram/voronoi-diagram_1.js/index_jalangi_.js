J$.iids = {"9":[1,15,1,22],"17":[1,23,1,40],"25":[1,15,1,41],"33":[1,15,1,41],"41":[1,15,1,41],"49":[4,4,4,5],"57":[4,7,4,8],"65":[4,3,4,9],"73":[5,4,5,5],"81":[5,7,5,8],"89":[5,3,5,9],"97":[6,4,6,5],"105":[6,7,6,8],"113":[6,3,6,9],"121":[3,14,7,2],"129":[3,14,7,2],"137":[3,14,7,2],"145":[9,1,9,8],"153":[9,13,9,20],"161":[9,21,9,27],"169":[9,13,9,28],"177":[9,1,9,29],"179":[9,1,9,12],"185":[9,1,9,29],"193":[1,1,10,1],"201":[1,1,10,1],"209":[1,1,10,1],"217":[1,1,10,1],"225":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var voronoi = require(\"voronoi-diagram\")\n\nvar points = [\n  [1, 0],\n  [0, 1],\n  [0, 0]\n]\n\nconsole.log(voronoi(points))\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(193, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(201, 'voronoi', voronoi, 0);
            J$.N(209, 'points', points, 0);
            var voronoi = J$.X1(41, J$.W(33, 'voronoi', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "voronoi-diagram", 21, false)), voronoi, 3));
            var points = J$.X1(137, J$.W(129, 'points', J$.T(121, [
                J$.T(65, [
                    J$.T(49, 1, 22, false),
                    J$.T(57, 0, 22, false)
                ], 10, false),
                J$.T(89, [
                    J$.T(73, 0, 22, false),
                    J$.T(81, 1, 22, false)
                ], 10, false),
                J$.T(113, [
                    J$.T(97, 0, 22, false),
                    J$.T(105, 0, 22, false)
                ], 10, false)
            ], 10, false), points, 3));
            J$.X1(185, J$.M(177, J$.R(145, 'console', console, 2), 'log', 0)(J$.F(169, J$.R(153, 'voronoi', voronoi, 1), 0)(J$.R(161, 'points', points, 1))));
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
