// @flow
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga';
import postsSaga from './sagas/postsSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(postsSaga);
    return store;
}