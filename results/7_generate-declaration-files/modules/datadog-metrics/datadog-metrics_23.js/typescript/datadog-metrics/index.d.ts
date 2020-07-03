export interface I__opts {
	'aggregator': undefined;
	'defaultTags': Array<any>;
	'reporter': undefined;
	'apiKey': string;
	'appKey': undefined;
	'agent': undefined;
	'host': string;
	'prefix': string;
	'flushIntervalSeconds': number;
}

export function hasOwnProperty(): boolean;
export class BufferedMetricsLogger {
	constructor(opts: I__opts);
	gauge(key: string, value: number, tags: undefined, timestampInMillis: undefined): void;
	addPoint(Type: Function, key: string, value: number, tags: undefined, timestampInMillis: undefined): void;
}

