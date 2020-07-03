export = Gradient;

declare class Gradient {
	constructor(colors: Array<any>|Gradient.I__colors);
	calcArray(value: number): Array<any>;
	calcHex(value: number): string;
}

declare namespace Gradient {
	export interface I__0 {
		'0': number;
		'1': number;
		'2': number;
		'length': number;
	}

	export interface I__1 {
		'0': number;
		'1': number;
		'2': number;
	}

	export interface I__2 {
		'0': number;
		'1': number;
		'2': number;
	}

	export interface I__5 {
		'0': number;
		'1': number;
		'2': number;
	}

	export interface I__colors {
		'0': I__0 | Array<any>;
		'1': I__1 | Array<any>;
		'2': I__2 | Array<any>;
		'3': Array<any>;
		'4': Array<any>;
		'5': I__5 | Array<any>;
		'length': number;
	}

}