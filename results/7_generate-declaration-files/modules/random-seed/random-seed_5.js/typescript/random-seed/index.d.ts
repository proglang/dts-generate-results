export = RandomSeed;

declare class RandomSeed {
	constructor(seed: string);
}

declare namespace RandomSeed {
export function create(seed: undefined): Function;
export function create(seed: string): Function;
}