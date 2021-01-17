export function shuffle(arr: any[], seed: string | number, copy: boolean): any[];
export function shuffle(arr: any[], seed: boolean | Function, copy: boolean): null;
export function getType(obj: string | null | number | any[] | boolean | Function): string;
export function setSeed(seed: string | number): number;
export function setSeed(seed: boolean | Function): boolean;
export function genMap(size: number): any[];
export function unshuffle(arr: any[], seed: string | number, copy: boolean): any[];
export function unshuffle(arr: null, seed: boolean | Function, copy: boolean): null;
