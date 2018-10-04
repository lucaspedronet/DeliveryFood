//criando nosso store
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas'
import reducers from './ducks';

//tds as actions disparadas vai ser repassadas para esse middleware
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  sagaMiddleware, //registrando o middleware no redux
]; //array de middleware

const createApproprienteStore = __DEV__ ? console.tron.createStore : createStore;
const store = createApproprienteStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
