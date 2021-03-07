export interface I__978-4 {
    ranges: string[][];
    name: string;
}
export interface I__groups {
    978-4: I__978-4;
    978-1: I__978-1;
}
export interface I__978-1 {
    name: string;
    ranges: string[][];
}
export function parse(val: string, groups?: undefined): null | object;
export function asIsbn13(val: string, hyphen?: undefined): string;
export function asIsbn10(val: string, hyphen: boolean): string;
export function hyphenate(val: string): string;
export class IsbnUtils {
    constructor(val: string, groups: I__groups);
    isValid(): boolean;
    isIsbn10(): boolean;
    isIsbn13(): boolean;
    asIsbn10(hyphen?: boolean): string;
    asIsbn13(hyphen?: boolean): string;
}
