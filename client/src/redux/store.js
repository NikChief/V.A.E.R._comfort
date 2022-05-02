import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'

import { applyMiddleware } from 'redux'
import { sagaWatcher } from './sagas/saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(sagaWatcher);
