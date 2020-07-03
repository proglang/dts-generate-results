export = PrettyHrtime;

declare function PrettyHrtime(source: Array<number>, opts: PrettyHrtime.I__opts): string;
declare namespace PrettyHrtime {
	export interface I__opts {
		'verbose': boolean | undefined;
		'precise': undefined | boolean;
	}

}