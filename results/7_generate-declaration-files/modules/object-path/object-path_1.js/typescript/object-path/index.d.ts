export = ObjectPath;
declare function ObjectPath(obj: object): object;
declare namespace ObjectPath {
    export interface I__obj {
        a: object;
    }
    export interface I__path__1 {
        length: number;
        0: string;
    }
    export interface I__0 {
        length: number;
    }
    export interface I__1 {
        length: number;
    }
    export interface I__2 {
        length: number;
        0: string;
    }
    export interface I__paths {
        length: number;
        0: ObjectPath.I__0;
        1: ObjectPath.I__1;
        2: ObjectPath.I__2;
    }
    export interface I__obj__2 {
        a: object;
        c: any[];
    }
    export interface I__obj__3 {
        a: object;
    }
    export interface I__path__4 {
        length: number;
        0: string;
        1: string;
    }
    export function get(obj: object, path: any[] | string, defaultValue?: undefined): string | void | any[] | object;
    export function get(obj: ObjectPath.I__obj, path: any[], defaultValue?: undefined): string | void | any[];
    export function get(obj: ObjectPath.I__obj | object, path: any[] | I__path | ObjectPath.I__path__1, defaultValue?: string): string;
    export function get(obj: ObjectPath.I__obj, path: any[] | I__path, defaultValue?: undefined): void;
    export function coalesce(obj: object, paths: any[] | ObjectPath.I__paths, defaultValue: string): string;
    export function empty(obj: object, path: string): string | void;
    export function set(obj: object, path: string, value: string, doNotReplace?: undefined): string | void;
    export function set(obj: object, path: string, value: any[], doNotReplace?: undefined): void;
    export function insert(obj: object, path: string, value: string, at: number): void;
    export function push(obj: object, path: string): void;
    export function ensureExists(obj: object, path: string, value: string): void;
    export function del(obj: ObjectPath.I__obj__2 | object, path: any[] | string): object;
    export function del(obj: any[], path: any[]): any[];
    export function del(obj: ObjectPath.I__obj, path: any[]): any[] | object;
    export function has(obj: ObjectPath.I__obj | ObjectPath.I__obj__3, path: any[] | ObjectPath.I__path__4 | string): boolean;
}
