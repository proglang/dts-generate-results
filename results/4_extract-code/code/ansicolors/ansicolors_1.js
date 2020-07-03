var colors = require('ansicolors');

// foreground colors
var redHerring = colors.red('herring');
var blueMoon = colors.blue('moon');
var brighBlueMoon = colors.brightBlue('moon');

console.log(redHerring);      // this will print 'herring' in red
console.log(blueMoon);        // this 'moon' in blue
console.log(brightBlueMoon);  // I think you got the idea

// background colors
console.log(colors.bgYellow('printed on yellow background'));
console.log(colors.bgBrightBlue('printed on bright blue background'));

// mixing background and foreground colors
// below two lines have same result (order in which bg and fg are combined doesn't matter)
console.log(colors.bgYellow(colors.blue('printed on yellow background in blue')));
console.log(colors.blue(colors.bgYellow('printed on yellow background in blue')));
