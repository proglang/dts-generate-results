export interface I__options {
	'description': string;
	'argumentDefault': undefined;
	'prefixChars': undefined;
	'conflictHandler': undefined;
	'addHelp': boolean;
	'parents': undefined | Array<any>;
	'prog': undefined | string;
	'usage': undefined;
	'epilog': undefined;
	'version': string;
	'debug': undefined;
	'formatterClass': undefined;
	'fromfilePrefixChars': undefined;
}

export class ArgumentParser {
	constructor(options: I__options);
	parseArgs(args: undefined, namespace: undefined): Namespace;
	parseKnownArgs(args: undefined, namespace: undefined): Array<any>;
	_parseKnownArgs(argStrings: Array<any>, namespace: Namespace): Array<any>;
	_getPositionalActions(): Array<any>;
	_matchArgumentsPartial(actions: Array<any>, regexpArgStrings: string): Array<any>;
}

export class Namespace {
	constructor(options: undefined);
}

