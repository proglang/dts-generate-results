export = GlobToRegexp;

declare function GlobToRegexp(glob: string, opts?: GlobToRegexp.I__opts): RegExp;
declare namespace GlobToRegexp {
	export interface I__opts {
		'extended'?: boolean;
		'globstar'?: boolean;
		'flags'?: string;
	}

}