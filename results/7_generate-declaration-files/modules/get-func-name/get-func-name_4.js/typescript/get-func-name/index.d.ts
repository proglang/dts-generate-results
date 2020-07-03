export = GetFuncName;

declare function GetFuncName(aFunc: Function|GetFuncName.I__aFunc): string;
declare namespace GetFuncName {
	export interface I__aFunc {
		'name': string;
	}

}