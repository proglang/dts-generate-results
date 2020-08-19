export = FNV;

declare class FNV {
	constructor();
	update(item: string): FNV;
	digest(encoding: string): string;
	_b64(safe?: boolean): string;
	_b36(): string;
}

declare namespace FNV {
export function hex(string: string): string;
export function base64(string: string): string;
export function base64Url(string: string): string;
export function base36(string: string): string;
}