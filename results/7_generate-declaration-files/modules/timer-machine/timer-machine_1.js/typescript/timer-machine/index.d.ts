export = Timer;
declare class Timer {
    constructor(start?: undefined);
    start(): boolean;
    isStopped(): boolean;
    emit(): boolean;
    stop(): boolean;
    isStarted(): boolean;
    timeFromStart(): number;
    time(): number;
}
