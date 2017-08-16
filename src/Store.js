import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';

const logger = createLogger({
    collapsed: true,
    predicate: true,
    stateTransformer: state => {
        let s = {};
        for (const prop in state) {
            if (state[prop].asMutable) {
                s[prop] = state[prop].asMutable({deep: true})
            } else {
                s[prop] = state[prop];
            }
        }
        return s;
    }
});

const finalCreateStore = compose(applyMiddleware(thunk, logger))(createStore);
const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default store;