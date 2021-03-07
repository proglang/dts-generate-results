export = EmptyDir;
declare function EmptyDir(dir: string, filter?: ((err: null, result: boolean) => void), cb?: undefined): void;
declare function EmptyDir(dir: string, filter?: undefined, cb?: undefined): Promise;
declare namespace EmptyDir {
    export function sync(dir: string, filter?: undefined): boolean;
    export function isEmpty(files: any[], filter?: null): boolean;
}
