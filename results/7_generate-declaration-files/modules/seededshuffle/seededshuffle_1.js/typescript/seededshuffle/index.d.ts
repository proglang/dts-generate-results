export function shuffle(arr: Array<any>, seed: string | number, copy: boolean): Array<any>;
export function shuffle(arr: Array<any>, seed: boolean | Function, copy: boolean): null;
export function getType(obj: Array<any> | string | number | boolean | null | Function): string;
export function setSeed(seed: string | number): number;
export function setSeed(seed: boolean | Function): boolean;
export function genMap(size: number): Array<any>;
export function unshuffle(arr: Array<any>, seed: string | number, copy: boolean): Array<any>;
export function unshuffle(arr: null, seed: boolean | Function, copy: boolean): null;
