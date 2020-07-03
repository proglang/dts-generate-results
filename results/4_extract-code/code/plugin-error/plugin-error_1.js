var PluginError = require('plugin-error');

var err = new PluginError('test', {
  message: 'something broke'
});

var err = new PluginError({
  plugin: 'test',
  message: 'something broke'
});

var err = new PluginError('test', 'something broke');

var err = new PluginError('test', 'something broke', { showStack: true });

var existingError = new Error('OMG');
var err = new PluginError('test', existingError, { showStack: true });
