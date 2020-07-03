export interface I__buffer {
	'length': undefined;
	'byteLength': number;
}

export interface I__array {
	'buffer': I__buffer;
}

export function malloc(n: number, dtype: string): Float32Array;
export function mallocFloat(n: number): Float32Array;
export function mallocArrayBuffer(n: number): ArrayBuffer;
export function free(array: Float32Array|I__array): void;
