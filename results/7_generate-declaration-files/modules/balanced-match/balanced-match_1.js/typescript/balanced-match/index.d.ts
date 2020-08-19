export = BalancedMatch;

declare function BalancedMatch(a: string | RegExp, b: string | RegExp, str: string): object;
declare namespace BalancedMatch {
	export interface I__str {
		'length': number;
	}

	export function range(a: string, b: string, str: string | BalancedMatch.I__str): Array<any>;
}