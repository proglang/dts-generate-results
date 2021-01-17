export = Tableify;
declare function Tableify(obj: string | number | any[] | Tableify.I__obj, columns?: any[] | boolean, parents?: any[]): string;
declare namespace Tableify {
    export interface I__a {
        constructor: Function | Tableify.I__constructor;
    }
    export interface I__obj {
        a: number | Tableify.I__a;
        key2: number | Tableify.I__key2;
        key1: string | Tableify.I__key1;
        someArrayOfObjects: any[] | Tableify.I__someArrayOfObjects;
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
        a: number | Tableify.I__a;
        b: number | Tableify.I__b;
        c: number | Tableify.I__c;
    }
    export interface I__someArrayOfObjects {
        constructor: Function | Tableify.I__constructor;
        0: Tableify.I__0;
    }
}
