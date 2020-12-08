export = Easydate;
declare function Easydate(pattern: string, config?: Easydate.I__config | string): string;
declare namespace Easydate {
    export interface I__config {
        setDate?: string;
        timeZone?: string;
        adjust?: boolean;
    }
}
