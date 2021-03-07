export = EmptyDir;
declare function EmptyDir(dir: string, filter: Function, cb: ((err: null, isEmpty: boolean) => void)): void;
declare namespace EmptyDir {
    export function sync(dir: string, filter: Function): boolean;
    export function isEmpty(files: any[], filter: ((filepath: string) => boolean)): boolean;
}
