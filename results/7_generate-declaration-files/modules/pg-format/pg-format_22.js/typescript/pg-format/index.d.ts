export = PgFormat;

declare function PgFormat(fmt: string): string;
declare namespace PgFormat {
	export function formatWithArray(fmt: string, parameters: Array<any>): string;
	export function quoteLiteral(value: number): string;
	export function quoteLiteral(value: Array<any>): string;
	export function quoteLiteral(value: object): string;
	export function quoteLiteral(value: string): string;
}