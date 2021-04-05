import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getFirebase } from 'react-redux-firebase'

const middlewares = [
    thunk.withExtraArgument(getFirebase)
]

const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;