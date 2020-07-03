export = ContainsPath;

declare function ContainsPath(filepath: string, substr: string, options: ContainsPath.I__options): boolean;
declare function ContainsPath(filepath: string, substr: string, options: undefined): boolean;
declare namespace ContainsPath {
	export interface I__options {
		'nocase': undefined | boolean;
		'partialMatch': boolean | undefined;
	}

}