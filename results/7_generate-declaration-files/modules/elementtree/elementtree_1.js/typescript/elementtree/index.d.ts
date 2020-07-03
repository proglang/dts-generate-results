export interface I___children {
	'0': I__0;
	'1': I__1;
	'2': I__2;
	'3': I__3;
	'4': I__4;
	'5': I__5;
	'6': I__6;
	'7': I__7;
	'8': I__8;
	'9': I__9;
	'length': number;
}

export interface I__0 {
	'_children': I___children;
}

export interface I__1 {
	'_children': I___children;
}

export interface I__2 {
	'_children': I___children;
}

export interface I__3 {
	'_children': I___children;
}

export interface I__4 {
	'_children': I___children;
}

export interface I__5 {
	'_children': I___children;
}

export interface I__6 {
	'_children': I___children;
}

export interface I__7 {
	'_children': I___children;
}

export interface I__8 {
	'_children': I___children;
}

export interface I__9 {
	'_children': I___children;
}

export interface I__parent {
	'_children': I___children | Array<any>;
}

export function elementtree(tag: string, attrib: undefined): Element;
export function SubElement(parent: Element|I__parent, tag: string, attrib: undefined): Element;
export class ElementTree {
	constructor(element: Element);
	write(options: object): string;
}

