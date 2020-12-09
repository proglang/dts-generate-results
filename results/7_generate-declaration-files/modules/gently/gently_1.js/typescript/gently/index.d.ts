export = Gently;
declare class Gently {
    constructor();
    expect(obj: Dog | Gently.I__obj, method: string, count?: Function, stubFn?: undefined): Function;
    expect(obj: Dog | Gently.I__obj, method: string, count?: undefined, stubFn?: undefined): void;
    _name(obj: Dog | Gently.I__obj | Gently.I__obj__1, method: string, stubFn?: Function): string;
    _stubFn(self: Dog, obj: Dog | Gently.I__obj | Gently.I__obj__3, method: string, name: string, args: any[]): void;
}
declare namespace Gently {
    export interface I__bark {
        _original?: undefined;
    }
    export interface I__obj {
        bark: Gently.I__bark | Function;
        run?: Function;
    }
    export interface I__constructor {
        name: string;
    }
    export interface I__obj__1 {
        constructor: Gently.I__constructor | Function;
    }
    export interface I__bark__2 {
        _original: Function;
    }
    export interface I__obj__3 {
        bark: Gently.I__bark__2 | Function;
        run: Gently.I__run;
    }
    export interface I__run {
        _original?: undefined;
    }
}
