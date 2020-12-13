export interface I__cbs {
    onparserinit?: undefined;
}
export interface I__options {
    xmlMode?: undefined;
    Tokenizer?: undefined;
}
export class Parser {
    constructor(cbs: I__cbs, options: I__options);
    write(): void;
    end(): void;
}
