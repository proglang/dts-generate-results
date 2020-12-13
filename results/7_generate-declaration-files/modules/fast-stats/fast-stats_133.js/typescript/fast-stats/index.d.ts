export interface I__buckets {
    length: number;
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
}
export interface I__c {
    buckets: I__buckets;
}
export class Stats {
    constructor(c: I__c);
    push(): object;
    _add_cache(a: number): void;
    _find_bucket(a: number): number;
    distribution(): any[];
}
