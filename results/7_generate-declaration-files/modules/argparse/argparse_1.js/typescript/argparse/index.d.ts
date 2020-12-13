export interface I__options {
    description: string;
    argumentDefault?: undefined;
    prefixChars?: undefined;
    conflictHandler?: undefined;
    addHelp: boolean;
    parents?: any[];
    prog?: string;
    usage?: undefined;
    epilog?: undefined;
    version: string;
    debug?: undefined;
    formatterClass?: undefined;
    fromfilePrefixChars?: undefined;
}
export class ArgumentParser {
    constructor(options: I__options);
    parseArgs(args?: undefined, namespace?: undefined): Namespace;
    parseKnownArgs(args?: undefined, namespace?: undefined): any[];
    _parseKnownArgs(argStrings: any[], namespace: Namespace): any[];
    _getPositionalActions(): any[];
    _matchArgumentsPartial(actions: any[], regexpArgStrings: string): any[];
}
export class Namespace {
    constructor(options?: undefined);
}
