export = Gradient;
declare class Gradient {
    constructor(colors: number[][]);
    calcArray(value: number): any[];
    calcHex(value: number): string;
}
