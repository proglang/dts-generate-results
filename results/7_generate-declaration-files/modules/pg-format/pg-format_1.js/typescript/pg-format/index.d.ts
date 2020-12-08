export = PgFormat;
declare function PgFormat(fmt: string): string;
declare namespace PgFormat {
    export function formatWithArray(fmt: string, parameters: any[]): string;
    export function quoteIdent(value: string): string;
    export function quoteLiteral(value: number): string;
    export function quoteString(value: string): string;
}
