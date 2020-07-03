export = SafeJsonStringify;

declare function SafeJsonStringify(data: object, replacer: undefined, space: undefined): string;
declare namespace SafeJsonStringify {
	export function ensureProperties(obj: object): object;
}