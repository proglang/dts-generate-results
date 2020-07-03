// ES2015 module syntax:
import createEngine from 'redux-storage-engine-jsurl'

// In case your loader does not support the package.json module entry:
import createEngine from 'redux-storage-engine-jsurl/dist/es-modules'

// Old CommonJS variant:
const createEngine = require('redux-storage-engine-jsurl')

const engine = createEngine()
