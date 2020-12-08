export interface I__options {
	'customTypes': object;
}

export function typeCheck(type: Array<any> | string, input?: Array<any> | Error | RegExp | number | object | string, options?: I__options | object): boolean;
export function typeCheck(input: string): Array<any>;
