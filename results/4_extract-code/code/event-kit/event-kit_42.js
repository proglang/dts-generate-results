const {Disposable} = require('event-kit')

const disposable = new Disposable(() => this.destroyResource())
