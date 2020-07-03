export = GlobToRegexp;

declare function GlobToRegexp(glob: string, opts: undefined): RegExp;
declare function GlobToRegexp(glob: string, opts: GlobToRegexp.I__opts): RegExp;
declare namespace GlobToRegexp {
	export interface I__opts {
		'extended': boolean;
		'globstar': undefined;
		'flags': undefined;
	}

}