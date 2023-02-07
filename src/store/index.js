import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // thunk is middleware which is perform side effect.
import logger from 'redux-logger'; // logger is a middleware to console message.

import reducer from '../reducers'; // by default import index.js file form reducers folder

/**
 *  creating store by using configureStore() method,
 *  createStore(reducer, middleware) method's argument.
 *  reducer as argument in createStore() method required for creating store.
 */
let store;
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk,logger));
  return store;
}