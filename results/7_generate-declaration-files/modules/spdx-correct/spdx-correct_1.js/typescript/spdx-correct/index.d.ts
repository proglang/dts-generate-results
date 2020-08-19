export = SpdxCorrect;

declare function SpdxCorrect(identifier: string, options?: undefined): string | null;
declare function SpdxCorrect(identifier: string, options?: SpdxCorrect.I__options): string;
declare namespace SpdxCorrect {
	export interface I__options {
		'upgrade': boolean;
	}

}