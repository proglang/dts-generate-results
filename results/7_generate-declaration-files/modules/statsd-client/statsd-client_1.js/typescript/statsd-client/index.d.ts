export = StatsDClient;

declare class StatsDClient {
	constructor(options: StatsDClient.I__options);
	increment(name: string, delta?: undefined, tags?: undefined): StatsDClient;
	counter(name: string, delta: number, tags?: undefined): StatsDClient;
	formatTags(metric_tags?: StatsDClient.I__metric_tags): string;
	gauge(name: string, value: number, tags?: undefined): StatsDClient;
	timing(name: string, time: Date, tags?: undefined): StatsDClient;
	histogram(name: string, value: number, tags: object): StatsDClient;
	close(): StatsDClient;
}

declare namespace StatsDClient {
	export interface I__options {
		'tags'?: object;
		'prefix'?: string;
		'_socket'?: undefined;
		'tcp'?: undefined;
		'host': string;
	}

	export interface I__metric_tags {
		'valueOf': Function;
		'toString': Function;
		'__ORIGINAL_TYPEOF__': string;
		'TARGET_PROXY'?: undefined;
		'IS_WRAPPER_OBJECT': boolean;
		'foo': string;
	}

}