import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todoApp from './reducers/todos';

const configureStore = () => {
   const middlewares = [ReduxThunk];
   if(process.env.NODE_ENV !== 'production'){
		middlewares.push(createLogger())
	}
	return createStore(
		todoApp,
		applyMiddleware(...middlewares)
	);
}

export default configureStore;