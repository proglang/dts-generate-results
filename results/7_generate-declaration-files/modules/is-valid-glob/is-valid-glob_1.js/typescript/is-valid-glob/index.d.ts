export = IsValidGlob;

declare function IsValidGlob(glob: string|IsValidGlob.I__glob): boolean;
declare namespace IsValidGlob {
	export interface I__glob {
		'length': number;
	}

}