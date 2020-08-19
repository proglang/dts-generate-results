export = PgFormat;

declare function PgFormat(fmt: string): string;
declare namespace PgFormat {
	export function formatWithArray(fmt: string, parameters: Array<any>): string;
	export function quoteLiteral(value: number | Array<any> | object | string): string;
}