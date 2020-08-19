export = Registry;

declare class Registry {
	constructor(options: Registry.I__options);
	values(cb: Function): Registry;
}

declare namespace Registry {
	export interface I__options {
		'host'?: string;
		'hive': string;
		'key': string;
		'arch'?: null;
	}

}