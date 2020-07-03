export = BoolifyString;

declare function BoolifyString(obj: string): boolean;
declare function BoolifyString(obj: boolean): boolean;
declare function BoolifyString(obj: object): boolean;
declare function BoolifyString(obj: number): boolean;
declare function BoolifyString(obj: Array<any>): boolean;
declare function BoolifyString(obj: undefined): boolean;
declare function BoolifyString(obj: null): boolean;
declare function BoolifyString(obj: String): boolean;
declare namespace BoolifyString {
}