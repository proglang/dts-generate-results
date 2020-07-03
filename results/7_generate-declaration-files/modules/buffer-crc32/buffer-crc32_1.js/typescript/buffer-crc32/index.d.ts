export = BufferCrc32;

declare function BufferCrc32(): Buffer;
declare namespace BufferCrc32 {
	export function signed(): number;
	export function unsigned(): number;
}