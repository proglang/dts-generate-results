export interface I___children_element {
    _children: any[];
}
export interface I__parent {
    _children: (Element | I___children_element)[];
}
export function elementtree(tag: string, attrib?: undefined): Element;
export function SubElement(parent: Element | I__parent, tag: string, attrib?: undefined): Element;
export class ElementTree {
    constructor(element: Element);
    write(options: object): string;
}
