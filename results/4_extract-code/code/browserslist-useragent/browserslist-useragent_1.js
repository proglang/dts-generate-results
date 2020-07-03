const { matchesUA } = require('browserslist-useragent')

matchesUA(userAgentString, options)

// with browserslist config inferred
matchesUA('Mozilla/5.0 (Windows NT 10.0; rv:54.0) Gecko/20100101 Firefox/54.0')
//returns boolean

// with explicit browserslist
matchesUA('Mozilla/5.0 (Windows NT 10.0; rv:54.0) Gecko/20100101 Firefox/54.0', { browsers: ['Firefox > 53']})
// returns true
