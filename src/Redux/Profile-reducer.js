import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE_INFORMATION = "SET_PROFILE_INFORMATION";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
   profileInformation: {
      photo: null,
      status: "",
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
      posts : [
         {id: 0, message: 'Hi! How are you?', likesCount: 1},
         {id: 1, message: 'Hi! How are you?', likesCount: 4},
         {id: 2, message: 'Hi! How are you?', likesCount: 3},
         {id: 3, message: 'Hi! How are you?', likesCount: 2},
      ],
   },
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:{
         let newPost = {
         id: state.myPosts.posts.length,
         message: action.newPostText,
         likesCount: 0,
         }

         return {
            ...state,
            myPosts: {
               ...state.myPosts,
               posts: [
                  ...state.myPosts.posts,
                  newPost,
               ]
            }
         }
      }
      
      case DELETE_POST:{
         return {
            ...state,
            myPosts: {
               ...state.myPosts,
               posts: state.myPosts.posts.filter(p => p.id !== action.postId)
            }
         }
      }
      
      case SET_PROFILE_INFORMATION:{
         return {
            ...state,
            profileInformation: {
               ...state.profileInformation,
               photo: action.profileInformation.photos.large,
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

      case SET_PROFILE_STATUS:{
         return {
            ...state,
            profileInformation: {
               ...state.profileInformation,
               status: action.status
            }
         }
      }
   
      default:
         return state;
   }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });
export const setProfileInformation = (profileInformation) => ({type: SET_PROFILE_INFORMATION, profileInformation});
export default profileReducer;

export const setProfile = (userId) => {
   
   return async (dispatch) => {
      let data = await ProfileAPI.getProfileInformation(userId);
      dispatch(setProfileInformation(data));

      let response = await ProfileAPI.getProfileStatus(userId);
      dispatch(setProfileStatus(response.data));
   }
};

export const updateProfileStatus = (status) => {
   
   return async (dispatch) => {
      let response = await ProfileAPI.updateProfileStatus(status);

      if(response.data.resultCode === 0 ){
         dispatch(setProfileStatus(status))
      }
   }
};