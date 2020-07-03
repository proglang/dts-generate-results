var jsend = require('jsend')({ strict:true });

// Returns true
jsend.isValid({
	status: 'success',
	data: { foo:'bar' }
});

// Returns false
jsend.isValid({
	status: 'success'
});

// Returns false
jsend.isValid({
	status: 'success',
	data: { foo:'bar' },
	junk: 'is ok'
});
