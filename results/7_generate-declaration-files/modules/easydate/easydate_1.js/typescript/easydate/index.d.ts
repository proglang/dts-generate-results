export = Easydate;

declare function Easydate(pattern: string, config: undefined): string;
declare function Easydate(pattern: string, config: string|Easydate.I__config): string;
declare function Easydate(pattern: string, config: Easydate.I__config): string;
declare namespace Easydate {
	export interface I__config {
		'setDate': undefined | string;
		'timeZone': undefined | string;
		'adjust': undefined | boolean;
	}

}