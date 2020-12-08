export = BalancedMatch;
declare function BalancedMatch(a: RegExp | string, b: RegExp | string, str: string): object;
declare namespace BalancedMatch {
    export function range(a: string, b: string, str: string): any[];
}
