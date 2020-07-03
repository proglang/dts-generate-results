export = JsToJava;

declare function JsToJava(className: string, value: object): object;
declare namespace JsToJava {
	export interface I__type {
		'name': string;
	}

	export function jsToJava(type: string, value: object): object;
	export function jsToJava(type: I__type, value: boolean): object;
	export function jsToJava(type: I__type, value: number): object;
	export function Boolean(val: boolean): object;
	export function array(className: string, val: Array<any>): object;
}