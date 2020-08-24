import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../../redux/reducers';
import sagas from '../../redux/sagas';


let sagaMiddleware = createSagaMiddleware();
let enhancers = compose(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(reducers, enhancers);
sagaMiddleware.run(sagas);

export default store;
