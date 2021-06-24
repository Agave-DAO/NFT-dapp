import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
	let middlewares = applyMiddleware(sagaMiddleware);

	if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
		middlewares = compose(
			middlewares,
			window.__REDUX_DEVTOOLS_EXTENSION__()
		);
	}
	const store = createStore(reducers, initialState, compose(middlewares));

	sagaMiddleware.run(sagas);

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers');
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
