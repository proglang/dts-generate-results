export = smtpapi;

declare class smtpapi {
	constructor(header?: undefined);
	addTo(to: string): void;
	setUniqueArgs(val: object): void;
	jsonString(): string;
	jsonObject(): object;
	escapeUnicode(str: string): string;
}

declare namespace smtpapi {
}