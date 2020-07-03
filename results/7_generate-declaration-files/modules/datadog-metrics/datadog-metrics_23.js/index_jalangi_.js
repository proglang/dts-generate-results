J$.iids = {"9":[1,15,1,22],"17":[1,23,1,40],"25":[1,15,1,41],"33":[1,15,1,41],"41":[1,15,1,41],"49":[2,25,2,32],"57":[3,13,3,22],"65":[4,11,4,19],"73":[5,13,5,21],"81":[6,27,6,29],"89":[7,19,7,32],"97":[7,34,7,52],"105":[7,18,7,53],"113":[2,55,8,2],"121":[2,21,8,3],"123":[2,25,2,54],"129":[2,21,8,3],"137":[2,21,8,3],"145":[9,1,9,14],"153":[9,21,9,30],"161":[9,32,9,34],"169":[9,1,9,35],"171":[9,1,9,20],"177":[9,1,9,36],"185":[1,1,10,1],"193":[1,1,10,1],"201":[1,1,10,1],"209":[1,1,10,1],"217":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var metrics = require('datadog-metrics');\nvar metricsLogger = new metrics.BufferedMetricsLogger({\n    apiKey: 'TESTKEY',\n    host: 'myhost',\n    prefix: 'myapp.',\n    flushIntervalSeconds: 15,\n    defaultTags: ['env:staging', 'region:us-east-1']\n});\nmetricsLogger.gauge('mygauge', 42);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'metrics', metrics, 0);
            J$.N(201, 'metricsLogger', metricsLogger, 0);
            var metrics = J$.X1(41, J$.W(33, 'metrics', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'datadog-metrics', 21, false)), metrics, 3));
            var metricsLogger = J$.X1(137, J$.W(129, 'metricsLogger', J$.M(121, J$.R(49, 'metrics', metrics, 1), 'BufferedMetricsLogger', 2)(J$.T(113, {
                apiKey: J$.T(57, 'TESTKEY', 21, false),
                host: J$.T(65, 'myhost', 21, false),
                prefix: J$.T(73, 'myapp.', 21, false),
                flushIntervalSeconds: J$.T(81, 15, 22, false),
                defaultTags: J$.T(105, [
                    J$.T(89, 'env:staging', 21, false),
                    J$.T(97, 'region:us-east-1', 21, false)
                ], 10, false)
            }, 11, false)), metricsLogger, 3));
            J$.X1(177, J$.M(169, J$.R(145, 'metricsLogger', metricsLogger, 1), 'gauge', 0)(J$.T(153, 'mygauge', 21, false), J$.T(161, 42, 22, false)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
