export = LdapFilters;

declare class LdapFilters {
	constructor(attrib: string, comp: string, value: string);
	_indent(): string;
	toString(indent: undefined, level: number, id_char: undefined): string;
	_indent(indent: undefined, level: number, id_char: undefined): string;
}

declare namespace LdapFilters {
export function attribute(name: string): object;
export function AND(filters: Array<any>): object;
}