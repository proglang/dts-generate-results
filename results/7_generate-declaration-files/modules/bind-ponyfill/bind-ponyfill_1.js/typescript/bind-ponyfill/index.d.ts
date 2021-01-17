export = BindPonyfill;
declare function BindPonyfill(func: BindPonyfill.I__func | Function, context: string): Function;
declare namespace BindPonyfill {
    export interface I__func {
        bind: Function;
    }
}
