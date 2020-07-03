export function async(callback: Function, arg: Promise): void;
export function async(callback: Function, arg: undefined): void;
export class Promise {
	constructor(resolver: Function, label: undefined);
	then(onFulfillment: Function, onRejection: undefined, label: undefined): Promise;
	catch(): Promise;
	then(): Promise;
}

