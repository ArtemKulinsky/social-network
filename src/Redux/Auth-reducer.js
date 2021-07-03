import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const RE_AUTH_USER = "RE_AUTH_USER";
const SET_CAPTCHA = "SET_CAPTCHA_NEED"

let initialState = {
   userId: null,
   email: null,
   login: null,
   captcha: {
      isNeed: false,
      imageURL: null,
   },
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

      case SET_CAPTCHA: {
         return { 
            ...state,
            captcha: {
               isNeed: true,
               imageURL: action.imageURL,
            }
         }
      }

      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}});
const setCaptcha = (imageURL) => ({ type: SET_CAPTCHA, imageURL});
export default authReducer;

export const AuthMe = () => {

   return async (dispatch) => {

      let data = await AuthAPI.me();

      if(data.login) {
         let { id, email, login} = data;
         dispatch(setAuthUserData(id, email, login, true));
      };
   }
}

const getCaptcha = () => {

   return async (dispatch) => {

      let response = await AuthAPI.captcha();

      dispatch(setCaptcha(response.data.url));
   }
}

export const LoginUser = (email, password, remembeMe, captcha) => {

   return async (dispatch) => {

      let response = await AuthAPI.login(email, password, remembeMe, captcha)

      if(response.data.resultCode === 0) {
         dispatch(AuthMe());

      } else if (response.data.resultCode === 10){
         dispatch(getCaptcha());

      } else {
         let errorMessage = (response.data.messages > 0 ) ? response.data.messages[0] : "Some error";
         dispatch(stopSubmit( "login", { _error: errorMessage }))
      }
   }
}

export const LogoutUser = () => {

   return async (dispatch) => {

      let response = await AuthAPI.logout();

      if(response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false));
      }
   }
}