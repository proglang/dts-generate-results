export = GregorianCalendar;

declare class GregorianCalendar {
	constructor(loc: GregorianCalendar.I__loc);
	setTime(): void;
	complete(): void;
	computeFields(): void;
	get(): void;
}

declare namespace GregorianCalendar {
	export interface I__loc {
		'timezoneOffset': number;
		'firstDayOfWeek': number;
		'minimalDaysInFirstWeek': number;
	}

}