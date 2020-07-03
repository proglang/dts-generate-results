export = MomentHoliday;

declare function MomentHoliday(): Moment;
declare namespace MomentHoliday {
	export function isMoment(obj: undefined): boolean;
	export function isDate(input: undefined): boolean;
	export function now(): number;
	export function updateOffset(): void;
	export function hasOwnProperty(): boolean;
}