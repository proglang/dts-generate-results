export = AlmostEqual;

declare function AlmostEqual(a: number, b: number, absoluteError: number, relativeError: number): boolean;
declare function AlmostEqual(a: number, b: number, absoluteError: undefined, relativeError: undefined): boolean;
declare namespace AlmostEqual {
}