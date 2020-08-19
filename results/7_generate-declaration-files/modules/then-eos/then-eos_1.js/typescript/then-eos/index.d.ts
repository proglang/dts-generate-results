export = ThenEos;

declare function ThenEos(stream: ReadStream | ThenEos.I__stream): Promise;
declare namespace ThenEos {
	export interface I__stream {
		'readable': boolean;
		'writable'?: undefined;
	}

}