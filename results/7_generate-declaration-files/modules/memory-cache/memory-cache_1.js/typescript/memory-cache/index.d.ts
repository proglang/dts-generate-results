export function put(key: string, value: string, time: undefined, timeoutCallback: undefined): string;
export function put(key: string, value: string, time: number, timeoutCallback: Function): string;
export function get(key: string): string|null;
