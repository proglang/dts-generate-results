export = Json2md;

declare function Json2md(data: string, prefix: undefined, _type: undefined): string;
declare function Json2md(data: Json2md.I__data, prefix: string, _type: undefined): string;
declare function Json2md(data: string, prefix: string, _type: undefined): string;
declare function Json2md(data: object, prefix: string, _type: string): string;
declare function Json2md(data: Array<any>, prefix: string, _type: string): string;
declare function Json2md(data: Array<any>|Json2md.I__data, prefix: undefined, _type: undefined): string;
declare namespace Json2md {
	export interface I__data {
		'0': object;
		'h1': string;
		'blockquote': string;
		'img': I__img;
		'h2': string;
		'ul': I__ul;
		'ol': I__ol;
		'p': string;
		'code': object;
		'length': number;
	}

	export interface I__img {
		'0': object;
		'1': object;
		'2': object;
		'length': number;
	}

	export interface I__ul {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

	export interface I__ol {
		'0': string;
		'1': string;
		'2': string;
		'length': number;
	}

}