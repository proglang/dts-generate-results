var getAuthToken = require('registry-auth-token')
var getRegistryUrl = require('registry-auth-token/registry-url')

// Get auth token and type for default `registry` set in `.npmrc`
console.log(getAuthToken()) // {token: 'someToken', type: 'Bearer'}

// Get auth token for a specific registry URL
console.log(getAuthToken('//registry.foo.bar'))

// Find the registry auth token for a given URL (with deep path):
// If registry is at `//some.host/registry`
// URL passed is `//some.host/registry/deep/path`
// Will find token the closest matching path; `//some.host/registry`
console.log(getAuthToken('//some.host/registry/deep/path', {recursive: true}))

// Find the configured registry url for scope `@foobar`.
// Falls back to the global registry if not defined.
console.log(getRegistryUrl('@foobar'))

// Use the npm config that is passed in
console.log(getRegistryUrl('http://registry.foobar.eu/', {
  npmrc: {
    'registry': 'http://registry.foobar.eu/',
    '//registry.foobar.eu/:_authToken': 'qar'
  }
}))
