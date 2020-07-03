export = Slug;

declare function Slug(string: string, opts: undefined): string;
declare function Slug(string: string, opts: string): string;
declare function Slug(string: string, opts: Slug.I__opts): string;
declare namespace Slug {
	export interface I__opts {
		'mode': undefined | string;
		'lower': boolean;
		'symbols': undefined | boolean;
		'multicharmap': object;
		'charmap': object;
		'remove': RegExp;
		'replacement': string;
	}

}