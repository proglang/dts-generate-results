export = UrlParse;

declare function UrlParse(address: string, location: boolean, parser?: undefined): object;
declare namespace UrlParse {
	export function trimLeft(str: string): string;
	export function lolcation(loc: null): object;
	export function extractProtocol(address: string): object;
}