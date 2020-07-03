// Example custom build usage:
var engine = require('store/src/store-engine')
var storages = [
	require('store/storages/localStorage'),
	require('store/storages/cookieStorage')
]
var plugins = [
	require('store/plugins/defaults'),
	require('store/plugins/expire')
]
var store = engine.createStore(storages, plugins)
store.set('foo', 'bar', new Date().getTime() + 3000) // Using expire plugin to expire in 3 seconds
