export = Route;

declare class Route {
	constructor(spec: string);
	match(path: string): object;
	reverse(params: object): string;
}

declare namespace Route {
}