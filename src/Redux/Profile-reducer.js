const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
         debugger;
         let newPost = {
         id: state.myPosts.posts.length + 1,
         message: state.myPosts.newPost.text,
         likesCount: 0,
         }
         
         let stateCopy = { ...state};
         stateCopy.myPosts.posts = [
            newPost,
            ...state.myPosts.posts];

         stateCopy.myPosts.newPost.text = '';
         return stateCopy;
      }
      
      case UPDATE_NEW_POST_TEXT:{
         // let stateCopy = {...state};
         // stateCopy.myPosts.newPost = {
         //    ...state.myPosts.newPost,
         //    text: action.newText} 
         
         return {
            ...state,
            myPosts: {...state.myPosts, newPost: {...state.myPosts.newPost, text: action.newText}}
         }
         // return stateCopy;
      }
   
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => 
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;