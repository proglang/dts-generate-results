export = Speakingurl;

declare function Speakingurl(input: string, opts: Speakingurl.I__opts): string;
declare namespace Speakingurl {
	export interface I__titleCase {
		'length': number;
	}

	export interface I__opts {
		'maintainCase': undefined;
		'custom': undefined;
		'truncate': undefined;
		'uric': undefined;
		'uricNoSlash': undefined;
		'mark': undefined;
		'symbols': undefined;
		'lang': undefined;
		'separator': undefined;
		'titleCase': I__titleCase | Array<any>;
	}

	export function createSlug(opts: object): Function;
}