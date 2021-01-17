export = ExifImage;
declare class ExifImage {
    constructor(options: ExifImage.I__options, callback: Function);
    loadImage(image: string, callback: Function): void;
}
declare namespace ExifImage {
    export interface I__constructor {
        name: string;
    }
    export interface I__image {
        constructor: Function | ExifImage.I__constructor;
    }
    export interface I__options {
        image: string | ExifImage.I__image;
    }
}
