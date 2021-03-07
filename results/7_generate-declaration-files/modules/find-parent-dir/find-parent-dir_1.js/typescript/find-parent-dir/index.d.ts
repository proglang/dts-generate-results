export = FindParentDir;
declare function FindParentDir(currentFullPath: string, clue: string, cb: ((err: null, dir: null) => void)): void;
declare namespace FindParentDir {
    export function sync(currentFullPath: string, clue: string): null;
}
