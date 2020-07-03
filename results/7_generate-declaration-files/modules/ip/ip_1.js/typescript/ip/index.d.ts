export interface I__buff {
	'0': number;
	'1': number;
	'2': number;
	'3': number;
	'64': number;
	'65': number;
	'66': number;
	'67': number;
	'length': number;
}

export function address(name: undefined, family: undefined): void;
export function isLoopback(addr: string): boolean;
export function isEqual(a: string, b: string): boolean;
export function toBuffer(ip: string, buff: undefined, offset: undefined): Buffer;
export function toBuffer(ip: string, buff: Buffer, offset: number): Buffer;
export function isV4Format(ip: string): boolean;
export function isV6Format(ip: string): boolean;
export function toString(buff: Buffer|I__buff, offset: undefined, length: undefined): string;
export function toString(buff: Buffer|I__buff, offset: number, length: number): string;
export function fromPrefixLen(prefixlen: number, family: undefined): string;
export function mask(addr: string, mask: string): string;
export function cidr(cidrString: string): string;
export function not(addr: string): string;
export function or(a: string, b: string): string;
export function isPrivate(addr: string): boolean;
export function subnet(addr: string, mask: string): object;
export function toLong(ip: string): number;
export function fromLong(ipl: number): string;
export function cidrSubnet(cidrString: string): object;
