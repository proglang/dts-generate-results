export = FsReaddirRecursive;
declare function FsReaddirRecursive(root: string, filter?: (((x: string) => boolean)) | Function, files?: any[], prefix?: string): any[];
