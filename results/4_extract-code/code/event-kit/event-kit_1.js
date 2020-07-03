const {Emitter} = require('event-kit')

class User {
  constructor() {
    this.emitter = new Emitter()
  }

  onDidChangeName(callback) {
    this.emitter.on('did-change-name', callback)
  }

  setName(name) {
    if (name !== this.name) {
      this.name = name
      this.emitter.emit('did-change-name', name)
    }

    return this.name
  }

  destroy() {
    this.emitter.dispose()
  }
}
