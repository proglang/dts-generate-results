export = UrlParse;
declare function UrlParse(address: string, location: object, parser?: undefined): object;
declare namespace UrlParse {
    export interface I__loc {
        protocol?: undefined;
        href?: undefined;
    }
    export function trimLeft(str: string): string;
    export function lolcation(loc: UrlParse.I__loc): object;
    export function extractProtocol(address: string): object;
}
