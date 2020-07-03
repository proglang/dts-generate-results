export = Registry;

declare class Registry {
	constructor(options: Registry.I__options);
	values(cb: Function): Registry;
}

declare namespace Registry {
	export interface I__options {
		'host': undefined | string;
		'hive': string;
		'key': string;
		'arch': undefined | null;
	}

}