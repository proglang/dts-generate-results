export = Json2md;
declare function Json2md(data: any[] | Json2md.I__data | object | string, prefix?: string, _type?: string): string;
declare namespace Json2md {
    export interface I__data {
        h1: string;
        blockquote: string;
        img: Json2md.I__img;
        h2: string;
        ul: Json2md.I__ul;
        ol: Json2md.I__ol;
        p: string;
        code: object;
        length: number;
        0: object;
    }
    export interface I__img {
        length: number;
        0: object;
        1: object;
        2: object;
    }
    export interface I__ul {
        length: number;
        0: string;
        1: string;
        2: string;
    }
    export interface I__ol {
        length: number;
        0: string;
        1: string;
        2: string;
    }
}
