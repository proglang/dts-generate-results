export = RandomSeed;
declare class RandomSeed {
    constructor(seed?: undefined);
    random(): number;
}
declare namespace RandomSeed {
    export function create(seed?: undefined): Function;
}
