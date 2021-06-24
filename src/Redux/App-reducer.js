import { AuthMe } from "./Auth-reducer";

const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZE:{
         return {
            ...state,
            initialized: true,
         }
      }

      default:
         return state;
   }
};

export const initializedSuccess = () => ({ type: SET_INITIALIZE });
export default appReducer;

export const initializeApp = () => (dispatch) => {
   let promises = [];
   promises.push(dispatch(AuthMe()));

   Promise.all(promises)
      .then(() => {
         dispatch(initializedSuccess());
      });
};