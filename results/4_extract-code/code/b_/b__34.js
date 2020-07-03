var B = require('b_').B;
var b = B({isFullBoolValue: true});

b('button', {disabled: true, focused: false}) ===
'button button_disabled_true button_focused_false';
