export = BufferCompare;

declare function BufferCompare(a: Buffer | BufferCompare.I__a, b: Buffer): number;
declare namespace BufferCompare {
	export interface I__a {
		'compare': Function;
	}

}