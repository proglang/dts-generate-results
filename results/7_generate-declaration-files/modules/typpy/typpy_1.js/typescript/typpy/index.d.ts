export = Typpy;
declare function Typpy(input: number, target?: undefined): string;
declare function Typpy(input: object | string, target?: Function | boolean): boolean;
declare namespace Typpy {
    export interface I__input {
        constructor: Function;
    }
    export function get(input: null | number, str?: boolean): string;
    export function get(input: any[] | Typpy.I__input | string, str?: boolean): Function;
    export function is(input: null | object | string, target: Function | boolean | string): boolean;
}
