export function async(callback: Function, arg?: Promise): void;
export class Promise {
	constructor(resolver: Function,label?: undefined);
	then(onFulfillment: Function, onRejection?: undefined, label?: undefined): Promise;
	catch(): Promise;
}

