var IncrementalDOM = require('incremental-dom'),
    elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text;

function render(data) {
  elementVoid('input', '', [ 'type', 'text' ]);
  elementOpen('div', '', null);
    if (data.someCondition) {
      text(data.text);
    }
  elementClose('div');
}
