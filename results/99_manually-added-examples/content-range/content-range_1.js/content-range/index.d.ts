export interface I__options {
	'length'?: number | string;
	'first'?: number;
	'last'?: number;
	'limit'?: number;
	'unit': string;
}

export function format(options: I__options): string;
export function parse(str: string): object;
