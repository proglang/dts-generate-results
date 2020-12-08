export = JsToJava;
declare function JsToJava(className: JsToJava.I__type | string, value: boolean | number | object): object;
declare namespace JsToJava {
    export interface I__type {
        name: string;
    }
    export function Boolean(val: boolean): object;
    export function array(className: string, val: any[]): object;
}
