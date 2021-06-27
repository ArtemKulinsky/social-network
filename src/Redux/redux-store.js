import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import asideReducer from "./Aside-reducer";
import authReducer from "./Auth-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer"; 
import usersReducer from "./Users-reducer";
import thunkMiddleWare from "redux-thunk";
import axios from "axios";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

let reducers = combineReducers({
   auth: authReducer,
   profileReducer: profileReducer,
   dialogsReducer: dialogsReducer,
   asideReducer: asideReducer,
   usersPage: usersReducer,
   form: formReducer,
   app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.axios = axios;

export default store;