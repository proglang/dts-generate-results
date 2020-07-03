const {serialize, deserialize} = require('json-immutable');

withRedux(
    (initialState, options) => {...}, // makeStore
    {
        serializeState: state => serialize(state),
        deserializeState: state => deserialize(state)
    }
);
