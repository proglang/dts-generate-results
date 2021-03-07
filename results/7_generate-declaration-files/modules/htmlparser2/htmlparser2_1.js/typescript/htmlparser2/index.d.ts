export interface I__cbs {
    onparserinit?: undefined;
}
export interface I__options {
    lowerCaseTags?: undefined;
    xmlMode?: undefined;
    lowerCaseAttributeNames?: undefined;
    Tokenizer?: undefined;
}
export interface I__options__1 {
    xmlMode?: undefined;
    decodeEntities: boolean;
}
export class Parser {
    constructor(cbs: I__cbs, options: I__options);
    write(chunk: string): void;
    end(chunk?: undefined): void;
}
export class f {
    constructor(options: I__options__1, cbs: Parser);
}
