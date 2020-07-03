var cli = require('cli'), options = cli.parse();

cli.withStdinLines(function(lines, newline) {
    lines.sort(!options.n ? null : function(a, b) {
        return parseInt(a) > parseInt(b);
    });
    if (options.r) lines.reverse();
    this.output(lines.join(newline));
});
