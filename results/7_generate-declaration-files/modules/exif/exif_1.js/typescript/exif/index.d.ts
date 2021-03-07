export = ExifImage;
declare class ExifImage {
    constructor(options: ExifImage.I__options, callback: ((error: I__error | Error, exifData?: undefined) => void));
    loadImage(image: string | ExifImage.I__image, callback: ((error: Error, exifData?: undefined) => void)): void;
}
declare namespace ExifImage {
    export interface I__options {
        image: string;
    }
    export interface I__error {
        message: string;
    }
    export interface I__constructor {
        name: string;
    }
    export interface I__image {
        constructor: Function | ExifImage.I__constructor;
    }
}
