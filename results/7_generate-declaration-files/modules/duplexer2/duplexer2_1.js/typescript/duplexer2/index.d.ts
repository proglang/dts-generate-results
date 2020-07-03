export = Duplexer2;

declare function Duplexer2(options: Writable, writable: Readable, readable: undefined): DuplexWrapper;
declare namespace Duplexer2 {
	export interface I__writable {
		'read': Function;
	}

	export class DuplexWrapper {
		constructor(options: Writable, writable: Readable|I__writable, readable: undefined);
	}

}