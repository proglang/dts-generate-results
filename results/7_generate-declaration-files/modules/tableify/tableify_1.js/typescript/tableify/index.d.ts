export = Tableify;
declare function Tableify(obj: any[] | Tableify.I__obj | number | string, columns?: any[] | boolean, parents?: any[]): string;
declare namespace Tableify {
    export interface I__a {
        constructor: Function | Tableify.I__constructor;
    }
    export interface I__obj {
        a: number | Tableify.I__a;
        key2: number | Tableify.I__key2;
        key1: Tableify.I__key1 | string;
        someArrayOfObjects: Tableify.I__someArrayOfObjects | any[];
    }
    export interface I__key2 {
        constructor: Function;
    }
    export interface I__key1 {
        constructor: Function;
    }
    export interface I__constructor {
        name: string;
    }
    export interface I__b {
        constructor: Function;
    }
    export interface I__c {
        constructor: Function;
    }
    export interface I__0 {
        a: Tableify.I__a;
        b: Tableify.I__b;
        c: Tableify.I__c;
    }
    export interface I__someArrayOfObjects {
        constructor: Tableify.I__constructor | Function;
        0: object | Tableify.I__0;
    }
}
