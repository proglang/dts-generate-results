export = SaneEmailValidation;

declare function SaneEmailValidation(str: string): boolean;
declare namespace SaneEmailValidation {
	export function isNotEmail(str: string): boolean;
}