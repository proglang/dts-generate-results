const shortenRepoUrl = require('shorten-repo-url');


const HTML = shortenRepoUrl(
	'https://github.com/nodejs/node/tree/v0.12/doc',
	'https://github.com/nodejs/node' // same repo
);
//=> '<code>v0.12</code>' // repo-less URL

const HTML = shortenRepoUrl(
	'https://github.com/nodejs/node/tree/v0.12/doc',
	'https://github.com' // not the same repo
);
//=> 'nodejs/node@<code>v0.12</code>' // URL with repo

