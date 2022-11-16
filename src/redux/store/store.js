import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import UniReducer from '../reducers';

const middleware = [reduxThunk];
if(process.env.NODE_ENV !== 'development'){
    middleware.push(logger);
}

const store = createStore(UniReducer,  composeWithDevTools(applyMiddleware(...middleware)));
export default store;