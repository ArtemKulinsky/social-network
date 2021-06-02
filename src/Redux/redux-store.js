import { combineReducers, createStore } from "redux";
import asideReducer from "./Aside-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer"; 

let reducers = combineReducers({
   profileReducer: profileReducer,
   dialogsReducer: dialogsReducer,
   asideReducer: asideReducer,
});

let store = createStore(reducers);

export default store;