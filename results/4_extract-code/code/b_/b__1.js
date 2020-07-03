var b = require('b_');

// blocks
b('button', {size: 'xl'}) === 'button button_size_xl';

// block elements
b('modal', 'close', {size: 'xl'}) === 'modal__close modal__close_size_xl';

// boolean modifiers
b('button', {hidden: false}) === 'button';
b('button', {hidden: true}) === 'button button_hidden';
