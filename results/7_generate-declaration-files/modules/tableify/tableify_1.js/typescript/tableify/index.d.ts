export = Tableify;
declare function Tableify(obj: string | number | any[] | Tableify.I__obj, columns?: any[] | boolean, parents?: any[]): string;
declare namespace Tableify {
    export interface I__obj {
        a: number;
        key2: number;
        key1: string;
        someArrayOfObjects: any[] | Tableify.I__someArrayOfObjects;
    }
    export interface I__constructor {
        name: string;
    }
    export interface I__0 {
        a: number;
        b: number;
        c: number;
    }
    export interface I__someArrayOfObjects {
        constructor: Function | Tableify.I__constructor;
        0: Tableify.I__0;
    }
}
