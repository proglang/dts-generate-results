export = IsAbsolute;
declare function IsAbsolute(fp: string): boolean;
declare namespace IsAbsolute {
    export function posix(fp: string): boolean;
}
