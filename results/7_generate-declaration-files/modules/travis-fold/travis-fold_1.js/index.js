var fold = require('travis-fold'),
	out = [];

// prepare output
out.push('Output begins...');

fold.pushStart(out, 'fold');
out.push('next line');

fold.pushStart(out, 'bar'); // nested
out.push('next line');
out.push('next line');
out.push('next line');
fold.pushEnd(out, 'bar');

out.push('next line');
out.push('next line');
fold.pushEnd(out, 'fold');

// and emit it
console.log(out.join('\n').trim());
