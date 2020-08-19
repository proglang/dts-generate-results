export = RepeatString;

declare function RepeatString(str: string | RepeatString.I__str, num: number): string;
declare namespace RepeatString {
	export interface I__str {
		'length': number;
	}

}