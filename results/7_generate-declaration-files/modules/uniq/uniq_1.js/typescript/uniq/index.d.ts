export = Uniq;

declare function Uniq(list: Array<any>|Uniq.I__list, compare: undefined, sorted: undefined): Array<any>;
declare namespace Uniq {
	export interface I__list {
		'length': number;
	}

}