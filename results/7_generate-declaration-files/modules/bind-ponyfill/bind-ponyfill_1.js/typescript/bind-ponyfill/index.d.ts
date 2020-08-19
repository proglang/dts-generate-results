export = BindPonyfill;

declare function BindPonyfill(func: Function | BindPonyfill.I__func, context: string): Function;
declare namespace BindPonyfill {
	export interface I__func {
		'bind': Function;
	}

}