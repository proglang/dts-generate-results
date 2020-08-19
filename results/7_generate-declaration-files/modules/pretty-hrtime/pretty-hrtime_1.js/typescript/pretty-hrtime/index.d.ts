export = PrettyHrtime;

declare function PrettyHrtime(source: Array<any>, opts?: PrettyHrtime.I__opts): string;
declare namespace PrettyHrtime {
	export interface I__opts {
		'verbose'?: boolean;
		'precise'?: boolean;
	}

}