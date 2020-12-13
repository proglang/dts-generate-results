export function shuffle(arr: any[], seed: number | string, copy: boolean): any[];
export function shuffle(arr: any[], seed: Function | boolean, copy: boolean): null;
export function getType(obj: any[] | Function | boolean | null | number | string): string;
export function setSeed(seed: number | string): number;
export function setSeed(seed: Function | boolean): boolean;
export function genMap(size: number): any[];
export function unshuffle(arr: any[], seed: number | string, copy: boolean): any[];
export function unshuffle(arr: null, seed: Function | boolean, copy: boolean): null;
