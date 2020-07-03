const { app } = require('electron');
const settings = require('electron-settings');

app.on('ready', () => {

  settings.set('name', {
    first: 'Cosmo',
    last: 'Kramer'
  });

  settings.get('name.first');
  // => "Cosmo"

  settings.has('name.middle');
  // => false
});
