export = Memoizee;
declare function Memoizee(fn: Function | Memoizee.I__fn): Function;
declare namespace Memoizee {
    export interface I__fn {
        length: number;
    }
}
