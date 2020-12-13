export interface I__opts {
    domains?: any[];
    secondLevelDomains?: any[];
    topLevelDomains?: any[];
    distanceFunction?: Function;
    suggested?: undefined;
    empty?: undefined;
    email?: undefined;
}
export function run(opts: I__opts): void;
export function encodeEmail(email?: undefined): string;
export function suggest(email: string, domains: any[], secondLevelDomains: any[], topLevelDomains: any[], distanceFunction: Function): boolean;
export function splitEmail(email: string): boolean;
export function findClosestDomain(domain?: undefined, domains: any[], distanceFunction: Function, threshold: number): boolean;
