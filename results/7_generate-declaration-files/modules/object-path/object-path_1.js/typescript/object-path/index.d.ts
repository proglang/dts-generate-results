export = ObjectPath;

declare function ObjectPath(obj: object): object;
declare namespace ObjectPath {
	export interface I__obj {
		'a': object;
	}

	export interface I__path {
		'0': string;
		'length': number;
	}

	export interface I__0 {
		'length': number;
	}

	export interface I__1 {
		'length': number;
	}

	export interface I__2 {
		'0': string;
		'length': number;
	}

	export interface I__paths {
		'0': I__0;
		'1': I__1;
		'2': I__2;
		'length': number;
	}

	export interface I__obj__1 {
		'a': object;
		'c': Array<any>;
	}

	export interface I__obj__2 {
		'a': object;
	}

	export interface I__path__3 {
		'0': string;
		'1': string;
		'length': number;
	}

	export function get(obj: object, path: Array<any> | string, defaultValue?: undefined): string | void | Array<any> | object;
	export function get(obj: ObjectPath.I__obj, path: Array<any>, defaultValue?: undefined): string | void | Array<any>;
	export function get(obj: object | ObjectPath.I__obj, path: string | ObjectPath.I__path | Array<any>, defaultValue?: undefined): string | void;
	export function get(obj: object, path: Array<any> | ObjectPath.I__path, defaultValue?: string): string;
	export function coalesce(obj: object, paths: Array<any> | ObjectPath.I__paths, defaultValue: string): string;
	export function empty(obj: object, path: string): string | void;
	export function set(obj: object, path: string, value: string, doNotReplace?: undefined): string | void;
	export function set(obj: object, path: string, value: Array<any>, doNotReplace?: undefined): void;
	export function insert(obj: object, path: string, value: string, at: number): void;
	export function push(obj: object, path: string): void;
	export function ensureExists(obj: object, path: string, value: string): void;
	export function del(obj: object | ObjectPath.I__obj__1, path: Array<any> | string): object;
	export function del(obj: Array<any>, path: Array<any>): Array<any>;
	export function del(obj: ObjectPath.I__obj, path: Array<any>): Array<any> | object;
	export function has(obj: ObjectPath.I__obj__2 | ObjectPath.I__obj, path: string | Array<any> | ObjectPath.I__path__3): boolean;
}