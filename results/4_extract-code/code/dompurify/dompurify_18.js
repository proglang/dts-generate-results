const createDOMPurify = require('dompurify');
const jsdom = require('jsdom').jsdom;

const window = jsdom('').defaultView;
const DOMPurify = createDOMPurify(window);

const clean = DOMPurify.sanitize(dirty);
