const smartTruncate = require('smart-truncate');

const string = 'To iterate is human, to recurse divine.';

// Append an ellipsis at the end of the truncated string.
const truncated = smartTruncate(string, 15);
