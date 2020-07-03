export = MultiPurposeModule;

declare function MultiPurposeModule(firstName: string, lastName: string): string|;
declare namespace MultiPurposeModule {
	export function anotherFunction(): string;
}