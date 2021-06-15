import { combineReducers, createStore } from "redux";
import asideReducer from "./Aside-reducer";
import authReducer from "./Auth-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer"; 
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
   auth: authReducer,
   profileReducer: profileReducer,
   dialogsReducer: dialogsReducer,
   asideReducer: asideReducer,
   usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store; //!Чтобы можно было обратиться к store через консоль

export default store;