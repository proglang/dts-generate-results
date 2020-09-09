export class Html5Entities {
	constructor();
	encode(str: string): string;
	encodeNonUTF(str: string): string;
	encodeNonASCII(str: string): string;
	decode(str: string): string;
}

