const {applyMiddleware, combineReducers, createStore} = require('redux');
const thunk = require('redux-thunk');
const reducer = require('./reducers/index');

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

// Note passing middleware as the last argument to createStore requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);
