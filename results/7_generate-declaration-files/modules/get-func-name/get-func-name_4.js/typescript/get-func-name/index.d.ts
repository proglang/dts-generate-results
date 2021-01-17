export = GetFuncName;
declare function GetFuncName(aFunc: GetFuncName.I__aFunc | Function): string;
declare namespace GetFuncName {
    export interface I__aFunc {
        name: string;
    }
}
