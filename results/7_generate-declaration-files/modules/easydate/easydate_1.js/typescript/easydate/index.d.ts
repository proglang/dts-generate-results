export = Easydate;
declare function Easydate(pattern: string, config?: string | Easydate.I__config): string;
declare namespace Easydate {
    export interface I__config {
        setDate?: string;
        timeZone?: string;
        adjust?: boolean;
    }
}
