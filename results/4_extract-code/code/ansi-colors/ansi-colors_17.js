const { bold, red } = require('ansi-styles');
console.log(bold(`foo ${red.dim('bar')} baz`));

const colorette = require('colorette');
console.log(colorette.bold(`foo ${colorette.red(colorette.dim('bar'))} baz`));

const kleur = require('kleur');
console.log(kleur.bold(`foo ${kleur.red.dim('bar')} baz`));

const chalk = require('chalk');
console.log(chalk.bold(`foo ${chalk.red.dim('bar')} baz`));
