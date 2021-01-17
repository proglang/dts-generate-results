export = Json2md;
declare function Json2md(data: string | object[] | object | any[] | Json2md.I__data, prefix?: string, _type?: string): string;
declare namespace Json2md {
    export interface I__data {
        h1: string;
        blockquote: string;
        img: object[];
        h2: string;
        ul: string[];
        ol: string[];
        p: string;
        code: object;
    }
}
