import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import weatherDataReducer from "./weather-data-reducer.js";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({weatherData: weatherDataReducer, form: formReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));
window.store = store;
export default store;