const Window = require('window');
const whenDomReady = require('when-dom-ready');

const { document } = new Window();

whenDomReady(document).then(() => console.log('DOM is ready yo!'));
