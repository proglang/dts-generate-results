export = BalancedMatch;

declare function BalancedMatch(a: string, b: string, str: string): object;
declare function BalancedMatch(a: RegExp, b: RegExp, str: string): object;
declare namespace BalancedMatch {
	export interface I__str {
		'length': number;
	}

	export function range(a: string, b: string, str: string): Array<any>;
	export function range(a: string, b: string, str: string|I__str): Array<any>;
}