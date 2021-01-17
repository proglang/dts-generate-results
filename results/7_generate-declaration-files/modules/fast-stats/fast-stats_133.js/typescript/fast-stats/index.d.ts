export interface I__c {
    buckets: number[];
}
export class Stats {
    constructor(c: I__c);
    push(): object;
    _add_cache(a: number): void;
    _find_bucket(a: number): number;
    distribution(): any[];
}
