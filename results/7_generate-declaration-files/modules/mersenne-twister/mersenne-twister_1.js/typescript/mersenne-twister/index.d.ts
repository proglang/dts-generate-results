export = MersenneTwister;

declare class MersenneTwister {
	constructor(seed: undefined);
	random(): number;
	random_int(): number;
	random_incl(): number;
	random_excl(): number;
	random_long(): number;
	random_int31(): number;
}

declare namespace MersenneTwister {
}