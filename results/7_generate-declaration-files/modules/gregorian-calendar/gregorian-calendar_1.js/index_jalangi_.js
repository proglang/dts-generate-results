J$.iids = {"9":[1,25,1,32],"10":[3,14,3,25],"17":[1,33,1,53],"25":[1,25,1,54],"33":[1,25,1,54],"41":[1,25,1,54],"49":[2,16,2,33],"57":[2,34,2,41],"65":[2,42,2,79],"73":[2,34,2,80],"81":[2,12,2,81],"89":[2,12,2,81],"97":[2,12,2,81],"105":[3,1,3,5],"113":[3,19,3,23],"121":[3,15,3,25],"129":[3,1,3,26],"131":[3,1,3,13],"137":[3,1,3,27],"145":[4,1,4,8],"153":[4,13,4,17],"161":[4,13,4,32],"163":[4,13,4,30],"169":[4,1,4,33],"171":[4,1,4,12],"177":[4,1,4,34],"185":[1,1,5,1],"193":[1,1,5,1],"201":[1,1,5,1],"209":[1,1,5,1],"217":[1,1,5,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var GregorianCalendar = require('gregorian-calendar');\nvar date = new GregorianCalendar(require('gregorian-calendar/lib/locale/zh_CN')); // defaults to en_US\ndate.setTime(+new Date());\nconsole.log(date.getDayOfWeek());\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(185, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(193, 'GregorianCalendar', GregorianCalendar, 0);
            J$.N(201, 'date', date, 0);
            var GregorianCalendar = J$.X1(41, J$.W(33, 'GregorianCalendar', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'gregorian-calendar', 21, false)), GregorianCalendar, 3));
            var date = J$.X1(97, J$.W(89, 'date', J$.F(81, J$.R(49, 'GregorianCalendar', GregorianCalendar, 1), 1)(J$.F(73, J$.R(57, 'require', require, 2), 0)(J$.T(65, 'gregorian-calendar/lib/locale/zh_CN', 21, false))), date, 3));
            J$.X1(137, J$.M(129, J$.R(105, 'date', date, 1), 'setTime', 0)(J$.U(10, '+', J$.F(121, J$.R(113, 'Date', Date, 2), 1)())));
            J$.X1(177, J$.M(169, J$.R(145, 'console', console, 2), 'log', 0)(J$.M(161, J$.R(153, 'date', date, 1), 'getDayOfWeek', 0)()));
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
