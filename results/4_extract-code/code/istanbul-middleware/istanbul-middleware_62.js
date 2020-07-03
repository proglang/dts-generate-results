function ignoreFrameworks(req) {
    var parsed = require('url').parse(req.url);
    return parsed.pathname && parsed.pathname.match(/\.js$/) && !parsed.pathname.match(/jquery/);
}
