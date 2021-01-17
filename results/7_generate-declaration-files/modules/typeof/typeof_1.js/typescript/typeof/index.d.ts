export = Typeof;
declare function Typeof(object: string | null | any[] | Typeof.I__object | MyClass | Buffer): string;
declare namespace Typeof {
    export interface I__constructor {
        name: string;
    }
    export interface I__object {
        constructor: Function | Typeof.I__constructor;
    }
}
