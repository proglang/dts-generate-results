export interface I__pattern {
    ident: string;
    literal: string;
    string: string;
}
export interface I__cfg {
    pattern: I__pattern;
}
export function config(cfg?: I__cfg): void;
