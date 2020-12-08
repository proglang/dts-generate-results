export = Speakingurl;
declare function Speakingurl(input: string, opts: Speakingurl.I__opts): string;
declare namespace Speakingurl {
    export interface I__opts {
        maintainCase: boolean;
        custom?: undefined;
        truncate?: undefined;
        uric?: undefined;
        uricNoSlash?: undefined;
        mark?: undefined;
        symbols?: undefined;
        lang?: undefined;
        separator: string;
        titleCase?: undefined;
    }
    export function createSlug(opts: object): Function;
}
