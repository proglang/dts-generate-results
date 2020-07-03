var jsend = require('jsend');

// Returns true
jsend.isValid({
	status: 'success',
	data: { foo:'bar' }
});

// Returns false
jsend.isValid({
	status: 'success'
});

// Returns true
jsend.isValid({
	status: 'success',
	data: { foo:'bar' },
	junk: 'is ok'
});
