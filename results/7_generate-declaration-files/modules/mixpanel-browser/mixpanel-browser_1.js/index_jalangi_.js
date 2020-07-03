J$.iids = {"9":[1,16,1,23],"17":[1,24,1,42],"25":[1,16,1,43],"33":[1,16,1,43],"41":[1,16,1,43],"49":[3,1,3,9],"57":[3,15,3,27],"65":[3,1,3,28],"67":[3,1,3,14],"73":[3,1,3,29],"81":[4,1,4,9],"89":[4,16,4,26],"97":[4,1,4,27],"99":[4,1,4,15],"105":[4,1,4,28],"113":[1,1,5,1],"121":[1,1,5,1],"129":[1,1,5,1],"137":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var mixpanel = require('mixpanel-browser');\n\nmixpanel.init(\"YOUR_TOKEN\");\nmixpanel.track(\"An event\");\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(113, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(121, 'mixpanel', mixpanel, 0);
            var mixpanel = J$.X1(41, J$.W(33, 'mixpanel', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'mixpanel-browser', 21, false)), mixpanel, 3));
            J$.X1(73, J$.M(65, J$.R(49, 'mixpanel', mixpanel, 1), 'init', 0)(J$.T(57, "YOUR_TOKEN", 21, false)));
            J$.X1(105, J$.M(97, J$.R(81, 'mixpanel', mixpanel, 1), 'track', 0)(J$.T(89, "An event", 21, false)));
        } catch (J$e) {
            J$.Ex(129, J$e);
        } finally {
            if (J$.Sr(137)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
