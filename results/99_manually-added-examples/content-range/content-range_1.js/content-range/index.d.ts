export interface I__options {
	'length': undefined | string | number;
	'first': undefined | number;
	'last': undefined | number;
	'limit': undefined | number;
	'unit': string;
}

export function format(options: I__options): string;
export function parse(str: string): null|object;
