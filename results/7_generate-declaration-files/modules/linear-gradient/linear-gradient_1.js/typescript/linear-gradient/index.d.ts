export = Gradient;
declare class Gradient {
    constructor(colors: any[] | Gradient.I__colors);
    calcArray(value: number): any[];
    calcHex(value: number): string;
}
declare namespace Gradient {
    export interface I__0 {
        length: number;
        0: number;
        1: number;
        2: number;
    }
    export interface I__1 {
        0: number;
        1: number;
        2: number;
    }
    export interface I__2 {
        0: number;
        1: number;
        2: number;
    }
    export interface I__5 {
        0: number;
        1: number;
        2: number;
    }
    export interface I__colors {
        length: number;
        0: Gradient.I__0 | any[];
        1: Gradient.I__1 | any[];
        2: Gradient.I__2 | any[];
        3: any[];
        4: any[];
        5: Gradient.I__5 | any[];
    }
}
