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
        constructor: ExifImage.I__constructor | Function;
    }
    export interface I__options {
        image: ExifImage.I__image;
    }
}
