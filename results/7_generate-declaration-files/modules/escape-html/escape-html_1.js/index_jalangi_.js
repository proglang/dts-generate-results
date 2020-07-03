J$.iids = {"9":[1,18,1,25],"10":[8,13,8,69],"17":[1,26,1,39],"18":[8,13,8,76],"25":[1,18,1,40],"26":[12,13,12,56],"33":[1,18,1,40],"34":[12,13,12,72],"41":[1,18,1,40],"49":[4,12,4,42],"57":[4,12,4,42],"65":[4,12,4,42],"73":[5,16,5,37],"81":[5,16,5,37],"89":[5,16,5,37],"97":[8,1,8,8],"105":[8,13,8,46],"113":[8,49,8,59],"121":[8,60,8,68],"129":[8,49,8,69],"137":[8,72,8,76],"145":[8,1,8,77],"147":[8,1,8,12],"153":[8,1,8,77],"161":[12,1,12,8],"169":[12,13,12,37],"177":[12,40,12,50],"185":[12,51,12,55],"193":[12,40,12,56],"201":[12,59,12,72],"209":[12,1,12,73],"211":[12,1,12,12],"217":[12,1,12,73],"225":[1,1,14,1],"233":[1,1,14,1],"241":[1,1,14,1],"249":[1,1,14,1],"257":[1,1,14,1],"265":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var escapeHtml = require('escape-html')\n\n// example values\nvar desc = 'I <b>think</b> this is good.'\nvar fullName = 'John \"Johnny\" Smith'\n\n// example passing in text into a html attribute\nconsole.dir('<input name=\"full_name\" value=\"' + escapeHtml(fullName) + '\">')\n// -> '<input name=\"full_name\" value=\"John &quot;Johnny&quot; Smith\">'\n\n// example passing in text in html body\nconsole.dir('<textarea name=\"desc\">' + escapeHtml(desc) + '</textarea>')\n// -> '<textarea name=\"desc\">I &lt;b&gt;think&lt;/b&gt; this is good.</textarea>'\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(225, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(233, 'escapeHtml', escapeHtml, 0);
            J$.N(241, 'desc', desc, 0);
            J$.N(249, 'fullName', fullName, 0);
            var escapeHtml = J$.X1(41, J$.W(33, 'escapeHtml', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, 'escape-html', 21, false)), escapeHtml, 3));
            var desc = J$.X1(65, J$.W(57, 'desc', J$.T(49, 'I <b>think</b> this is good.', 21, false), desc, 3));
            var fullName = J$.X1(89, J$.W(81, 'fullName', J$.T(73, 'John "Johnny" Smith', 21, false), fullName, 3));
            J$.X1(153, J$.M(145, J$.R(97, 'console', console, 2), 'dir', 0)(J$.B(18, '+', J$.B(10, '+', J$.T(105, '<input name="full_name" value="', 21, false), J$.F(129, J$.R(113, 'escapeHtml', escapeHtml, 1), 0)(J$.R(121, 'fullName', fullName, 1)), 0), J$.T(137, '">', 21, false), 0)));
            J$.X1(217, J$.M(209, J$.R(161, 'console', console, 2), 'dir', 0)(J$.B(34, '+', J$.B(26, '+', J$.T(169, '<textarea name="desc">', 21, false), J$.F(193, J$.R(177, 'escapeHtml', escapeHtml, 1), 0)(J$.R(185, 'desc', desc, 1)), 0), J$.T(201, '</textarea>', 21, false), 0)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
