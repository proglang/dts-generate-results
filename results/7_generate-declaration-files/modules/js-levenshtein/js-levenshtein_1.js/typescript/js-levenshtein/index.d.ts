export = JsLevenshtein;

declare function JsLevenshtein(a: string | JsLevenshtein.I__a, b: string | JsLevenshtein.I__b): number;
declare namespace JsLevenshtein {
	export interface I__a {
		'length': number;
	}

	export interface I__b {
		'length': number;
	}

}