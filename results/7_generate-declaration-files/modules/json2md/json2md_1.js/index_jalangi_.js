J$.iids = {"9":[1,15,1,22],"17":[1,23,1,32],"25":[1,15,1,33],"33":[1,15,1,33],"41":[1,15,1,33],"49":[3,1,3,8],"57":[3,13,3,20],"65":[4,11,4,29],"73":[4,5,4,31],"81":[5,19,5,50],"89":[5,5,5,52],"97":[7,18,7,30],"105":[7,40,7,76],"113":[7,9,7,78],"121":[8,18,8,33],"129":[8,43,8,80],"137":[8,9,8,82],"145":[9,18,9,37],"153":[9,47,9,84],"161":[9,9,9,86],"169":[6,12,10,8],"177":[6,5,11,6],"185":[12,11,12,21],"193":[12,5,12,23],"201":[14,9,14,22],"209":[15,9,15,61],"217":[16,9,16,14],"225":[13,11,17,8],"233":[13,5,18,6],"241":[19,11,19,30],"249":[19,5,19,32],"257":[21,9,21,27],"265":[22,9,22,29],"273":[23,9,23,31],"281":[20,11,24,8],"289":[20,5,25,6],"297":[26,11,26,24],"305":[26,5,26,26],"313":[27,10,27,51],"321":[27,5,27,53],"329":[29,19,29,23],"337":[31,11,31,34],"345":[32,11,32,28],"353":[33,11,33,14],"361":[34,11,34,22],"369":[30,18,35,10],"377":[28,15,36,8],"385":[28,5,37,6],"393":[3,21,38,2],"401":[3,13,38,3],"409":[3,1,38,4],"411":[3,1,3,12],"417":[3,1,38,4],"425":[1,1,64,1],"433":[1,1,64,1],"441":[1,1,64,1],"449":[1,1,64,1],"nBranches":0,"originalCodeFileName":"/tmp/runtimeAnalysis/index.js","instrumentedCodeFileName":"/tmp/runtimeAnalysis/index_jalangi_.js","code":"var json2md = require(\"json2md\")\n\nconsole.log(json2md([\n    { h1: \"JSON To Markdown\" }\n  , { blockquote: \"A JSON to Markdown converter.\" }\n  , { img: [\n        { title: \"Some image\", source: \"https://example.com/some-image.png\" }\n      , { title: \"Another image\", source: \"https://example.com/some-image1.png\" }\n      , { title: \"Yet another image\", source: \"https://example.com/some-image2.png\" }\n      ]\n    }\n  , { h2: \"Features\" }\n  , { ul: [\n        \"Easy to use\"\n      , \"You can programmatically generate Markdown content\"\n      , \"...\"\n      ]\n    }\n  , { h2: \"How to contribute\" }\n  , { ol: [\n        \"Fork the project\"\n      , \"Create your branch\"\n      , \"Raise a pull request\"\n      ]\n    }\n  , { h2: \"Code blocks\" }\n  , { p: \"Below you can see a code block example.\" }\n  , { \"code\": {\n        language: \"js\"\n      , content: [\n          \"function sum (a, b) {\"\n        , \"   return a + b\"\n        , \"}\"\n        , \"sum(1, 2)\"\n        ]\n      }\n    }\n]))\n// =>\n// # JSON To Markdown\n// > A JSON to Markdown converter.\n//\n// ![Some image](https://example.com/some-image.png)\n//\n// ![Another image](https://example.com/some-image1.png)\n//\n// ![Yet another image](https://example.com/some-image2.png)\n//\n// ## Features\n//\n//  - Easy to use\n//  - You can programmatically generate Markdown content\n//  - ...\n//\n// ## How to contribute\n//\n//  1. Fork the project\n//  2. Create your branch\n//  3. Raise a pull request\n//\n// ## Code blocks\n//\n// Below you can see a code block example.\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(425, '/tmp/runtimeAnalysis/index_jalangi_.js', '/tmp/runtimeAnalysis/index.js');
            J$.N(433, 'json2md', json2md, 0);
            var json2md = J$.X1(41, J$.W(33, 'json2md', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, "json2md", 21, false)), json2md, 3));
            J$.X1(417, J$.M(409, J$.R(49, 'console', console, 2), 'log', 0)(J$.F(401, J$.R(57, 'json2md', json2md, 1), 0)(J$.T(393, [
                J$.T(73, {
                    h1: J$.T(65, "JSON To Markdown", 21, false)
                }, 11, false),
                J$.T(89, {
                    blockquote: J$.T(81, "A JSON to Markdown converter.", 21, false)
                }, 11, false),
                J$.T(177, {
                    img: J$.T(169, [
                        J$.T(113, {
                            title: J$.T(97, "Some image", 21, false),
                            source: J$.T(105, "https://example.com/some-image.png", 21, false)
                        }, 11, false),
                        J$.T(137, {
                            title: J$.T(121, "Another image", 21, false),
                            source: J$.T(129, "https://example.com/some-image1.png", 21, false)
                        }, 11, false),
                        J$.T(161, {
                            title: J$.T(145, "Yet another image", 21, false),
                            source: J$.T(153, "https://example.com/some-image2.png", 21, false)
                        }, 11, false)
                    ], 10, false)
                }, 11, false),
                J$.T(193, {
                    h2: J$.T(185, "Features", 21, false)
                }, 11, false),
                J$.T(233, {
                    ul: J$.T(225, [
                        J$.T(201, "Easy to use", 21, false),
                        J$.T(209, "You can programmatically generate Markdown content", 21, false),
                        J$.T(217, "...", 21, false)
                    ], 10, false)
                }, 11, false),
                J$.T(249, {
                    h2: J$.T(241, "How to contribute", 21, false)
                }, 11, false),
                J$.T(289, {
                    ol: J$.T(281, [
                        J$.T(257, "Fork the project", 21, false),
                        J$.T(265, "Create your branch", 21, false),
                        J$.T(273, "Raise a pull request", 21, false)
                    ], 10, false)
                }, 11, false),
                J$.T(305, {
                    h2: J$.T(297, "Code blocks", 21, false)
                }, 11, false),
                J$.T(321, {
                    p: J$.T(313, "Below you can see a code block example.", 21, false)
                }, 11, false),
                J$.T(385, {
                    "code": J$.T(377, {
                        language: J$.T(329, "js", 21, false),
                        content: J$.T(369, [
                            J$.T(337, "function sum (a, b) {", 21, false),
                            J$.T(345, "   return a + b", 21, false),
                            J$.T(353, "}", 21, false),
                            J$.T(361, "sum(1, 2)", 21, false)
                        ], 10, false)
                    }, 11, false)
                }, 11, false)
            ], 10, false))));
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
