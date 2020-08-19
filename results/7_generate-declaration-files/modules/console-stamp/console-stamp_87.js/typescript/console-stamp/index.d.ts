export = ConsoleStamp;

declare function ConsoleStamp(con: Console | ConsoleStamp.I__con, options: object, prefix_metadata?: undefined): void;
declare namespace ConsoleStamp {
	export interface I__con {
		'__ts__'?: undefined;
		'debug': Function;
		'info': Function;
		'warn': Function;
		'error': Function;
		'fatal': Function;
	}

}