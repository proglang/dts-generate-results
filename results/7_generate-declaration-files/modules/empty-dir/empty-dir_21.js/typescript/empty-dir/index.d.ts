export = EmptyDir;

declare function EmptyDir(dir: string, filter: Function, cb: Function): void;
declare namespace EmptyDir {
	export function sync(dir: string, filter: Function): boolean;
	export function isEmpty(files: Array<any>, filter: Function): boolean;
}