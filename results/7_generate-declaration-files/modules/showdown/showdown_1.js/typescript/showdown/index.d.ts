export class Converter {
    constructor(converterOptions?: undefined);
    makeHtml(text: string): string;
    _dispatch(evtName: string, text: string, options: object, globals: object): string;
}
