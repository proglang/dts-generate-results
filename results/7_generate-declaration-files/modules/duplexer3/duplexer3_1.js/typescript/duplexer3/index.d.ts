export = Duplexer3;

declare function Duplexer3(options: Writable, writable: Readable, readable: undefined): DuplexWrapper;
declare namespace Duplexer3 {
	export interface I__writable {
		'read': Function;
	}

	export class DuplexWrapper {
		constructor(options: Writable, writable: Readable|I__writable, readable: undefined);
	}

}