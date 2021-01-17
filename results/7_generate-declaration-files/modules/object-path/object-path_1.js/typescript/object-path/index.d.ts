export = ObjectPath;
declare function ObjectPath(obj: object): object;
declare namespace ObjectPath {
    export interface I__obj {
        a: object;
    }
    export interface I__obj__1 {
        a: object;
        c: any[];
    }
    export interface I__obj__2 {
        a: object;
    }
    export function get(obj: object, path: string | any[], defaultValue?: undefined): string | object | void | any[];
    export function get(obj: ObjectPath.I__obj, path: any[], defaultValue?: undefined): string | void | any[];
    export function get(obj: ObjectPath.I__obj, path: string[], defaultValue?: undefined): string | void;
    export function get(obj: object, path: string[], defaultValue?: string): string;
    export function coalesce(obj: object, paths: (string | string[])[], defaultValue: string): string;
    export function empty(obj: object, path: string): string | void;
    export function set(obj: object, path: string, value: string, doNotReplace?: undefined): string | void;
    export function set(obj: object, path: string, value: any[], doNotReplace?: undefined): void;
    export function insert(obj: object, path: string, value: string, at: number): void;
    export function push(obj: object, path: string): void;
    export function ensureExists(obj: object, path: string, value: string): void;
    export function del(obj: object | ObjectPath.I__obj__1, path: string | any[]): object;
    export function del(obj: any[], path: any[]): any[];
    export function del(obj: ObjectPath.I__obj, path: any[]): object | any[];
    export function has(obj: ObjectPath.I__obj__2 | ObjectPath.I__obj, path: string | string[]): boolean;
}
