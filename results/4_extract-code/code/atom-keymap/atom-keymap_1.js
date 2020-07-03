var KeymapManager, keymaps;
KeymapManager = require('atom-keymap')

keymaps = new KeymapManager
keymaps.defaultTarget = document.body

// Pass all the window's keydown events to the KeymapManager
document.addEventListener('keydown', function(event) {
  keymaps.handleKeyboardEvent(event)
})

// Add some keymaps
keymaps.loadKeymap('/path/to/keymap-file.json') // can also be a directory of json / cson files
// OR
keymaps.add('/key/for/these/keymaps', {
  "body": {
    "up": "core:move-up",
    "down": "core:move-down"
  }
})

// When a keybinding is triggered, it will dispatch it on the node that was focused
window.addEventListener('core:move-up', (event) => console.log('up', event))
window.addEventListener('core:move-down', (event) => console.log('down', event))
