var B = require('b_').B;
var b = B({isFullModifier: false});

b('button_call-for-action', {disabled: true, focused: 'yes'}) ===
'button_call-for-action _disabled _focused_yes';
