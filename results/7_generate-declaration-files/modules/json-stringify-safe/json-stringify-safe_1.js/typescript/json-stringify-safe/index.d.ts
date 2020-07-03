export = JsonStringifySafe;

declare function JsonStringifySafe(obj: object, replacer: null, spaces: number, cycleReplacer?: any): string;
declare namespace JsonStringifySafe {
	export function serializer(replacer: null, cycleReplacer: undefined): Function;
}