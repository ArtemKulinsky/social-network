import asideReducer from "./Aside-reducer";
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"; 
///Чтобы не ошибиться в action.type выносим его action.type в константы. IDE подскажет ошибку.

let store = {
   _state : {
      profilePage: {
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
      },

      dialogsPage: {
         dialogs : [
            {id: 1, name :"Grigoriy Kuznezov"},
            {id: 2, name :"Nikolay Latkin"},
            {id: 3, name :"Vladimir Tashinskiy"},
            {id: 4, name :"Maksim Sokolov"},
            {id: 5, name :"Elmira Abramova"},
            {id: 6, name :"Artem Schiva"},
         ],

         messages : [
            {id: 1, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
            {id: 2, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
            {id: 3, message :"Я те говорю занят я", belong: 'user',},
            {id: 4, message :"Когда сможешь?", belong: 'opponent',},
            {id: 5, message :"Я сейчас занят", belong: 'user',},
            {id: 6, message :"Верни 3 сотки", belong: 'opponent',},
            {id: 7, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
            {id: 8, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
            {id: 9, message :"Я те говорю занят я", belong: 'user',},
            {id: 10, message :"Когда сможешь?", belong: 'opponent',},
            {id: 11, message :"Я сейчас занят", belong: 'user',},
            {id: 12, message :"Верни 3 сотки", belong: 'opponent',},
         ],

         newMessage: {
            text: '',
         }
      },

      aside: {
         friends: [
            { id: 1, name: "Grigoriy Kuznezov", },
            { id: 2, name: "Nikolay Latkin", },
            { id: 3, name: "Vladimir Tashinskiy", },
            { id: 4, name: "Maksim Sokolov", },
            { id: 5, name: "Elmira Abramova", },
            { id: 6, name: "Artem Schiva", },
         ]
      },
   },

   _rerenderEntireTree() {
      console.log('State was changed');
   },

   getState() {
      return this._state;
   },

   subcriber(observer){
      this._rerenderEntireTree = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.aside = asideReducer(this._state.aside, action);

      this._rerenderEntireTree();
   }
}

export default store;