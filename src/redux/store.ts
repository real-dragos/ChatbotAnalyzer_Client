import { apiMiddleware } from './middlewares/apiMiddleware';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [logger, thunk, apiMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
