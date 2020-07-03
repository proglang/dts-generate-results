var patch = require('incremental-dom').patch;

var data = {
  text: 'Hello World!',
  someCondition: true
};

patch(myElement, function() {
  render(data);
});

data.text = 'Hello World!';

patch(myElement, function() {
  render(data);
});
