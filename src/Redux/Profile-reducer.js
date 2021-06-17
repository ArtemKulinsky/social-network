import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_INFORMATION = "SET_PROFILE_INFORMATION";
const TRANSITION_TO_PROFILE = "TRANSITION_TO_PROFILE";

let initialState = {
   profileInformation: {
      photo: null,
      status: null,
      lookingForAJob: null,
      lookingForAJobDescription: null,
      fullName: null,
      contacts: {
         github: null,
         vk: null,
         facebook: null,
         instagram: null,
         twitter: null,
         website: null,
         youtube: null,
         mainLink: null,
      },
      id: null,
   },
   myPosts : {
      newPost : {
         text : '',
      },

      posts : [
         {id: 1, message: 'Hi! How are you?', likesCount: 1},
         {id: 2, message: 'Hi! How are you?', likesCount: 4},
         {id: 3, message: 'Hi! How are you?', likesCount: 3},
         {id: 4, message: 'Hi! How are you?', likesCount: 2},
      ],
   },
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:{
         let newPost = {
         id: state.myPosts.posts.length + 1,
         message: state.myPosts.newPost.text,
         likesCount: 0,
         }

         return {
            ...state,
            myPosts: {
               ...state.myPosts,
               newPost: {
                  ...state.myPosts.newPost,
                  text: '',
               },
               posts: [
                  newPost,
                  ...state.myPosts.posts,
               ]
            }
         }
      }
      
      case UPDATE_NEW_POST_TEXT:{
         return {
            ...state,
            myPosts: {...state.myPosts, newPost: {...state.myPosts.newPost, text: action.newText}}
         }
      }
      
      case SET_PROFILE_INFORMATION:{
         return {
            ...state,
            profileInformation: {
               photo: action.profileInformation.photos.large,
               status: action.profileInformation.status,
               lookingForAJob: action.profileInformation.lookingForAJob,
               lookingForAJobDescription: action.profileInformation.lookingForAJobDescription,
               fullName: action.profileInformation.fullName,
               contacts: {
                  github: action.profileInformation.contacts.github,
                  vk: action.profileInformation.contacts.vk,
                  facebook: action.profileInformation.contacts.facebook,
                  instagram: action.profileInformation.contacts.instagram,
                  twitter: action.profileInformation.contacts.twitter,
                  website: action.profileInformation.contacts.website,
                  youtube: action.profileInformation.contacts.youtube,
                  mainLink: action.profileInformation.contacts.mainLink,
               },
               id: action.profileInformation.userId,
            }
         }
      }
   
      default:
         return state;
   }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => 
   ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setProfileInformation = (profileInformation) => ({type: SET_PROFILE_INFORMATION, profileInformation});
export default profileReducer;

export const getProfile = (userId) => {
   
   return (dispatch) => {

      ProfileAPI.getProfile(userId)
      .then((data) => {
         dispatch(setProfileInformation(data));
      });
   }
}