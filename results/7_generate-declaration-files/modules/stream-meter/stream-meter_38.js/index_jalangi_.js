J$.iids = {"9":[1,13,1,20],"17":[1,21,1,35],"25":[1,13,1,36],"33":[1,13,1,36],"41":[1,13,1,36],"49":[3,14,3,19],"57":[3,20,3,24],"65":[3,14,3,25],"73":[3,14,3,25],"81":[3,14,3,25],"89":[4,1,4,7],"97":[4,11,4,18],"105":[4,20,6,2],"113":[4,20,6,2],"121":[4,20,6,2],"129":[4,20,6,2],"137":[4,1,6,3],"139":[4,1,4,10],"145":[4,1,6,3],"153":[9,12,9,18],"161":[9,12,9,24],"169":[9,12,9,24],"177":[9,12,9,24],"185":[1,1,10,1],"193":[1,1,10,1],"201":[1,1,10,1],"209":[1,1,10,1],"217":[4,20,6,2],"225":[4,20,6,2],"233":[1,1,10,1],"241":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var meter = require(\"stream-meter\")\n\nvar stream = meter(size)\nstream.on(\"error\", function (e) {\n  // handle the meter aborting the stream\n})\n\n// read the bytes processed by the meter and passed through to any subsequent streams.\nvar size = stream.bytes\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'meter', meter, 0);
            J$.N(201, 'stream', stream, 0);
            J$.N(209, 'size', size, 0);
            var meter = J$.X1(41, J$.W(33, 'meter', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "stream-meter", 21, false)), meter, 3));
            var stream = J$.X1(81, J$.W(73, 'stream', J$.F(65, J$.R(49, 'meter', meter, 1), 0)(J$.R(57, 'size', size, 1)), stream, 3));
            J$.X1(145, J$.M(137, J$.R(89, 'stream', stream, 1), 'on', 0)(J$.T(97, "error", 21, false), J$.T(129, function (e) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            e = J$.N(121, 'e', e, 4);
                        } catch (J$e) {
                            J$.Ex(217, J$e);
                        } finally {
                            if (J$.Fr(225))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105)));
            var size = J$.X1(177, J$.W(169, 'size', J$.G(161, J$.R(153, 'stream', stream, 1), 'bytes', 0), size, 3));
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
