import {createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "../sagas";
import reducers from '../reducers';

const sagaMiddleWare = createSagaMiddleWare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

export default store;