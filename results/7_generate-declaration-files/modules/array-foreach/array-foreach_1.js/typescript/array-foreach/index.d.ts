export = ArrayForeach;

declare function ArrayForeach(ary: Array<any> | ArrayForeach.I__ary, callback: Function, thisArg?: undefined): void;
declare namespace ArrayForeach {
	export interface I__ary {
		'forEach': Function;
	}

}