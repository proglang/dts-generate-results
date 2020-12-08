export function shuffle(arr: Array<any>, seed: number | string, copy: boolean): Array<any>;
export function shuffle(arr: Array<any>, seed: Function | boolean, copy: boolean): null;
export function getType(obj: Array<any> | Function | boolean | null | number | string): string;
export function setSeed(seed: number | string): number;
export function setSeed(seed: Function | boolean): boolean;
export function genMap(size: number): Array<any>;
export function unshuffle(arr: Array<any>, seed: number | string, copy: boolean): Array<any>;
export function unshuffle(arr: null, seed: Function | boolean, copy: boolean): null;
