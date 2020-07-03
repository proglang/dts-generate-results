export = SerializeJavascript;

declare function SerializeJavascript(obj: Array<any>, options: SerializeJavascript.I__options): string;
declare function SerializeJavascript(obj: object, options: undefined): string;
declare namespace SerializeJavascript {
	export interface I__options {
		'isJSON': undefined;
		'space': undefined;
		'unsafe': undefined;
	}

}