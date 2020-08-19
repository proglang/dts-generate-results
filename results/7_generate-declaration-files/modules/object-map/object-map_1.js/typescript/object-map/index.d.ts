export = ObjectMap;

declare function ObjectMap(object: ObjectMap.I__object, cb: Function, context?: undefined): object;
declare namespace ObjectMap {
	export interface I__object {
		'foo': number;
		'bar': number;
	}

}