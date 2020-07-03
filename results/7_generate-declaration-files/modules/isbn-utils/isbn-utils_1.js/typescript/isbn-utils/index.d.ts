export interface I__0 {
	'0': I__0 | string;
	'1': string;
	'length': number;
}

export interface I__1 {
	'0': string;
	'1': string;
}

export interface I__2 {
	'0': string;
	'1': string;
}

export interface I__3 {
	'0': string;
	'1': string;
}

export interface I__ranges {
	'0': I__0 | Array<any>;
	'1': I__1 | Array<any>;
	'2': I__2 | Array<any>;
	'3': I__3 | Array<any>;
	'length': number;
}

export interface I__978-4 {
	'ranges': I__ranges | Array<any>;
	'name': string;
}

export interface I__groups {
	'978-4': I__978-4 | object;
	'978-1': I__978-1 | object;
}

export interface I__978-1 {
	'name': string;
}

export function parse(val: string, groups: undefined): object|null;
export function asIsbn13(val: string, hyphen: undefined): string;
export function asIsbn10(val: string, hyphen: boolean): string;
export function hyphenate(val: string): string;
export class IsbnUtils {
	constructor(val: string, groups: I__groups);
	isValid(): boolean;
	isIsbn10(): boolean;
	isIsbn13(): boolean;
	asIsbn10(hyphen: undefined): string;
	asIsbn10(hyphen: boolean): string;
	asIsbn13(hyphen: undefined): string;
	asIsbn13(hyphen: boolean): string;
}

