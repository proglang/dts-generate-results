var morphdom = require('morphdom');

var el1 = document.createElement('div');
el1.className = 'foo';
el1.innerHTML = 'Hello John';

morphdom(el1, '<div class="bar">Hello Frank</div>');

expect(el1.className).to.equal('bar');
expect(el1.innerHTML).to.equal('Hello Frank');
