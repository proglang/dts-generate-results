export interface I__opts {
	'explicitCharkey': boolean;
	'trim': boolean;
	'normalize': boolean;
	'normalizeTags': boolean;
	'attrkey': string;
	'charkey': string;
	'explicitArray': boolean;
	'ignoreAttrs': boolean;
	'mergeAttrs': boolean;
	'explicitRoot': boolean;
	'validator': null;
	'xmlns': boolean;
	'explicitChildren': boolean;
	'preserveChildrenOrder': boolean;
	'childkey': string;
	'charsAsChildren': boolean;
	'includeWhiteChars': boolean;
	'async': boolean;
	'strict': boolean;
	'attrNameProcessors': null;
	'attrValueProcessors': null;
	'tagNameProcessors': null;
	'valueProcessors': null;
	'rootName': string;
	'xmldec': object;
	'doctype': null;
	'renderOpts': object;
	'headless': boolean;
	'chunkSize': number;
	'emptyTag': string;
	'cdata': boolean;
}

export class Parser {
	constructor(opts: I__opts);
}

