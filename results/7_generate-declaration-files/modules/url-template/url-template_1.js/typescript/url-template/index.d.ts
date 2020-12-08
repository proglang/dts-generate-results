export interface I__context {
	'email': string;
	'folder': string;
	'id': number;
}

export function parse(template: string): object;
export function encodeReserved(str: string): string;
export function getValues(context: I__context, operator: null, key: string, modifier?: undefined): Array<any>;
export function isDefined(value: number | string): boolean;
export function isKeyOperator(operator: null): boolean;
export function encodeValue(operator: null, value: string, key: null): string;
export function encodeUnreserved(str: string): string;
