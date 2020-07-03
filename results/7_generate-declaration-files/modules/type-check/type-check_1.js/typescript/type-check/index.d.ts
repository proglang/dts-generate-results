export interface I__customTypes {
	'Even': object;
}

export interface I__options {
	'customTypes': I__customTypes;
}

export function typeCheck(type: string, input: number, options: undefined): boolean;
export function typeCheck(type: string, input: string, options: undefined): boolean;
export function typeCheck(type: string, input: Error, options: undefined): boolean;
export function typeCheck(type: string, input: undefined, options: undefined): boolean;
export function typeCheck(type: string, input: Array<any>, options: undefined): boolean;
export function typeCheck(type: string, input: object, options: undefined): boolean;
export function typeCheck(type: string, input: RegExp, options: undefined): boolean;
export function typeCheck(type: string, input: number, options: object): boolean;
export function typeCheck(input: string): Array<any>;
export function typeCheck(parsedType: Array<any>, input: number, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: string, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: Error, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: undefined, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: Array<any>, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: object, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: RegExp, options: undefined): boolean;
export function typeCheck(parsedType: Array<any>, input: number, options: I__options): boolean;
