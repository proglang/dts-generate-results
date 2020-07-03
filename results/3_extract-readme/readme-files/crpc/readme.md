# crpc

Simple library for making requests to Cuvva-style RPC APIs.

Returns promises only. Standard callbacks are not supported.

```js
const crpc = require('crpc');
const client = crpc('https://api.example.com/v1');

await client('2018-03-06/get_user', { userId: 'foo' });
```

## Installation

```bash
$ npm install crpc
```

## Support

Please open an issue on this repository.

## Authors

- James Billingham <james@jamesbillingham.com>

## License

MIT licensed - see [LICENSE](LICENSE) file
