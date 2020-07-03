export = Ipcheck;

declare class Ipcheck {
	constructor(input: string);
	match(cidr: |I__cidr): boolean;
}

declare namespace Ipcheck {
	export interface I__cidr {
		'valid': boolean;
		'mask': number;
		'address': Array<any>;
	}

}