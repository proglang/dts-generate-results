export = FindParentDir;

declare function FindParentDir(currentFullPath: string, clue: string, cb: Function): void;
declare namespace FindParentDir {
	export function sync(currentFullPath: string, clue: string): null;
}