import { applyMiddleware, combineReducers, createStore } from "redux";
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

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store; //!Чтобы можно было обратиться к store через консоль
window.axios = axios;

export default store;