export = RandomSeed;

declare class RandomSeed {
	constructor(seed: undefined);
	initState(): void;
}

declare namespace RandomSeed {
export function create(seed: undefined): Function;
}