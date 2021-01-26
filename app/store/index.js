import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import noteReducer from '../reducers/noteReducer';

const rootReducer = combineReducers({
  noteReducer: noteReducer
})

const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;