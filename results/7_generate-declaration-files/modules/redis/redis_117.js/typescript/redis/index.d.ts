export interface I__command_obj {
	'args': Array<any>;
	'command': string;
}

export interface I__error_attributes {
	'message': string;
}

export interface I__obj {
	'message': string;
	'code': string;
	'command': string;
}

export function createClient(): RedisClient;
export class RedisClient {
	constructor(options: object, stream: undefined);
	set(): boolean;
	internal_send_command(command_obj: Command|I__command_obj): boolean;
	end(flush: boolean): void;
	flush_and_error(error_attributes: I__error_attributes, options: undefined): void;
	get(): boolean;
}

export class AbortError {
	constructor(obj: I__obj, stack: undefined);
}

