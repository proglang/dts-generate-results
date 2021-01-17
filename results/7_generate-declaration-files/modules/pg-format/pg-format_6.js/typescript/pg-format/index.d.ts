export = PgFormat;
declare function PgFormat(fmt: string): string;
declare namespace PgFormat {
    export function formatWithArray(fmt: string, parameters: any[]): string;
    export function quoteLiteral(value: string | number): string;
}
