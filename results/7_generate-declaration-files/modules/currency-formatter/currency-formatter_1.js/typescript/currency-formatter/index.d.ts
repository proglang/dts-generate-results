export interface I__options {
    code: string;
    locale?: undefined;
    symbol?: undefined;
    decimal?: undefined;
    thousand?: undefined;
    precision?: undefined;
    format?: undefined;
}
export function format(value: number, options: I__options): string;
export function findCurrency(currencyCode: string): object;
export function hasOwnProperty(): boolean;
