import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const RE_AUTH_USER = "RE_AUTH_USER";

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:{
         return {
            ...state,
            ...action.data,
            
         }
      }

      case RE_AUTH_USER:{
         return { ...state };
      }

      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}});
// export const reAuthUser = () => ({ type: RE_AUTH_USER });
export default authReducer;

export const AuthMe = () => {

   return (dispatch) => {

      return AuthAPI.me()
         .then(data => {
            if(data.login) {
               let { id, email, login} = data;
               dispatch(setAuthUserData(id, email, login, true));
            }
         })
   }
}

export const LoginUser = (email, password, remembeMe) => {

   return (dispatch) => {

      AuthAPI.login(email, password, remembeMe)
         .then(response => {
            if(response.data.resultCode === 0) {
               dispatch(AuthMe());
            } else {
               let errorMessage = (response.data.messages > 0 ) ? response.data.messages[0] : "Some error";
               dispatch(stopSubmit( "login", { _error: errorMessage }))
            }
         })
   }
}

export const LogoutUser = () => {

   return (dispatch) => {

      AuthAPI.logout()
         .then(response => {
            if(response.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false));
            } 
         })
   }
}