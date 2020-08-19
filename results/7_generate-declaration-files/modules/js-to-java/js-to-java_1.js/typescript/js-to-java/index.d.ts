export = JsToJava;

declare function JsToJava(className: string | JsToJava.I__type, value: object | boolean | number): object;
declare namespace JsToJava {
	export interface I__type {
		'name': string;
	}

	export function Boolean(val: boolean): object;
	export function array(className: string, val: Array<any>): object;
}