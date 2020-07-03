export interface I__byteString {
	'0': string;
	'1': string;
	'2': string;
	'3': string;
	'4': string;
	'5': string;
	'6': string;
	'7': string;
	'8': string;
	'9': string;
	'10': string;
	'11': string;
	'length': number;
}

export function atob(base64: string): string;
export function btoa(byteString: string|I__byteString): string;
export function toBase64(string: string): string;
export function fromBase64(b64: string): string;
