import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(promise),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
    )
);