export = Gently;
declare class Gently {
    constructor();
    expect(obj: Dog | Gently.I__obj, method: string, count?: Function, stubFn?: undefined): Function;
    expect(obj: Dog | Gently.I__obj, method: string, count?: undefined, stubFn?: undefined): void;
    _name(obj: Dog | Gently.I__obj__1 | Gently.I__obj, method: string, stubFn?: Function): string;
    _stubFn(self: Dog, obj: Gently.I__obj__3 | Dog | Gently.I__obj, method: string, name: string, args: any[]): void;
}
declare namespace Gently {
    export interface I__bark {
        _original?: undefined;
    }
    export interface I__obj {
        bark: Function | Gently.I__bark;
        run?: Function;
    }
    export interface I__constructor {
        name: string;
    }
    export interface I__obj__1 {
        constructor: Function | Gently.I__constructor;
    }
    export interface I__bark__2 {
        _original: Function;
    }
    export interface I__obj__3 {
        bark: Function | Gently.I__bark__2;
        run: Function | Gently.I__run;
    }
    export interface I__run {
        _original?: undefined;
    }
}
