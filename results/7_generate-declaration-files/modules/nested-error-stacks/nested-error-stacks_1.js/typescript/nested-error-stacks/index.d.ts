export = NestedErrorStacks;

declare class NestedErrorStacks {
	constructor(message: string, nested: Error);
}

declare namespace NestedErrorStacks {
}