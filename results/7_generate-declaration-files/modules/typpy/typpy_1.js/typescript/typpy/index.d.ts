export = Typpy;
declare function Typpy(input: number, target?: undefined): string;
declare function Typpy(input: string | object, target?: boolean | Function): boolean;
declare namespace Typpy {
    export interface I__input {
        constructor: Function;
    }
    export function get(input: null | number, str?: boolean): string;
    export function get(input: Typpy.I__input | string | any[], str?: boolean): Function;
    export function is(input: string | null | object, target: string | boolean | Function): boolean;
}
