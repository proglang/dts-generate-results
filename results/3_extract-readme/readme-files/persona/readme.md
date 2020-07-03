# persona-verify

The official javascript client library for the Persona API.

## Table of Contents
- persona-verify
  - [Install](#install)
  - [Documentation](#documentation)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)

## Install

```
npm install persona
```

## Documentation

The module provides a client for the Persona embedded flow.  For complete information about the API, head to the [docs][0].

## Getting Started

To open the flow you must create a `Client` object.

```javascript
const Persona = require('persona');
const client: Client = new Persona.Client({
  // This refers to a production demo blueprint owned by Persona
  blueprintId: 'persona-production_e1de83bf-e29f-48bb-9dae-568479b9edda',
  onLoad: () => client.open(),
  onStart: (inquiryId: string) => console.log(inquiryId),
  onSuccess: () => console.log('onSuccess'),
});
```

## Contributing

Please see [Contributing](CONTRIBUTING.md) for guidelines and instructions for local development.

## License

[MIT](LICENSE)

[0]: https://documentation.withpersona.com

