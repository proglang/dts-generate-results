export interface I__str {
	'length': number;
}

export interface I__str__1 {
	'length': number;
}

export interface I__str__2 {
	'0': string;
	'1': string;
	'2': string;
	'3': string;
	'4': string;
	'5': string;
	'length': number;
}

export interface I__str__3 {
	'length': number;
}

export class Html5Entities {
	constructor();
	encode(str: string | I__str): string;
	encodeNonUTF(str: string | I__str__1): string;
	encodeNonASCII(str: string | I__str__2): string;
	decode(str: string | I__str__3): string;
}

