export = Undertaker;
declare class Undertaker {
    constructor(customRegistry?: undefined);
    task(name: string, fn: Function): void;
    _setTask(name: string, fn: Function): void;
    series(): Function;
    parallel(): Function;
}
