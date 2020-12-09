export = BitArray;
declare class BitArray {
    constructor(length: number);
    set(i: number, v: boolean): boolean;
    get(i: number): boolean;
}
