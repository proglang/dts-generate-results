export = StatsDClient;

declare class StatsDClient {
	constructor(options: StatsDClient.I__options);
}

declare namespace StatsDClient {
	export interface I__options {
		'tags': undefined;
		'prefix': undefined | string;
		'_socket': undefined;
		'tcp': undefined;
		'host': string;
	}

}