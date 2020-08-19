export interface I__options {
	'customTypes': object;
}

export function typeCheck(type: string | Array<any>, input?: number | string | Error | Array<any> | object | RegExp, options?: object | I__options): boolean;
export function typeCheck(input: string): Array<any>;
