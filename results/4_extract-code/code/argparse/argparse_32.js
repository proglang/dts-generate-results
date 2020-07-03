#!/usr/bin/env node
'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
  version: '0.0.1',
  addHelp:true,
  description: 'Argparse examples: sub-commands',
});

var subparsers = parser.addSubparsers({
  title:'subcommands',
  dest:"subcommand_name"
});

var bar = subparsers.addParser('c1', {addHelp:true});
bar.addArgument(
  [ '-f', '--foo' ],
  {
    action: 'store',
    help: 'foo3 bar3'
  }
);
var bar = subparsers.addParser(
  'c2',
  {aliases:['co'], addHelp:true}
);
bar.addArgument(
  [ '-b', '--bar' ],
  {
    action: 'store',
    type: 'int',
    help: 'foo3 bar3'
  }
);

var args = parser.parseArgs();
console.dir(args);

