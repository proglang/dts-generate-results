export = StaleLRU;

declare class StaleLRU {
	constructor(options: StaleLRU.I__options);
	set(key: string, value: string, options: undefined): boolean;
	_getSize(): number;
	get(key: string): string;
}

declare namespace StaleLRU {
	export interface I__options {
		'max': undefined;
		'maximumSize': undefined;
		'maxSize': number;
		'length': undefined;
		'getSize': undefined;
		'maxAge': number;
		'staleWhileRevalidate': number;
		'revalidate': Function;
	}

}