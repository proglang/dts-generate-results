const {fromJS} = require('immutable');

withRedux(
    (initialState, options) => {...}, // makeStore,
    {
        serializeState: state => state.toJS(),
        deserializeState: state => fromJS(state),
    }
);
