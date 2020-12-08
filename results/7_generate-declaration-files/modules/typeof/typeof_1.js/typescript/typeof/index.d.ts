export = Typeof;
declare function Typeof(object: any[] | Buffer | Typeof.I__object | MyClass | null | string): string;
declare namespace Typeof {
    export interface I__constructor {
        name: string;
    }
    export interface I__object {
        constructor: Typeof.I__constructor | Function;
    }
}
