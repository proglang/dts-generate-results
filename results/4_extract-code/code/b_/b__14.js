var B = require('b_').B;
var b = B({
    tailSpace: ' ',
    elementSeparator: '-',
    modSeparator: '--',
    modValueSeparator: '-',
    classSeparator: ' '
});

b('block', 'elem', {mod1: true, mod2: false, mod3: 'mod3'}) ===
'block-elem block-elem--mod1 block-elem--mod3-mod3 ';
