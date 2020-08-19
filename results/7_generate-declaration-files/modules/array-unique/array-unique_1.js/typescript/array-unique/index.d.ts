export = ArrayUnique;

declare function ArrayUnique(arr: Array<any> | ArrayUnique.I__arr): Array<any>;
declare namespace ArrayUnique {
	export interface I__arr {
		'0': string;
		'1': string;
		'2': string;
		'3': string;
		'length': number;
	}

	export interface I__arr__1 {
		'0': string;
		'1': string;
		'2': string;
		'3': string;
		'length': number;
	}

	export function uniqueImmutable(arr: Array<any> | ArrayUnique.I__arr__1): Array<any>;
}