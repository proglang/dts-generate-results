export = Nopt;

declare function Nopt(types: object, shorthands: object, args: Array<any>, slice: number): object;
declare namespace Nopt {
	export function clean(data: object, types: object, typeDefs: object): void;
}