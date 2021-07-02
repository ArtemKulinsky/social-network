const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"; 

let initialState = {
   dialogs : [
         {id: 1, name :"Grigoriy Kuznezov"},
         {id: 2, name :"Nikolay Latkin"},
         {id: 3, name :"Vladimir Tashinskiy"},
         {id: 4, name :"Maksim Sokolov"},
         {id: 5, name :"Elmira Abramova"},
         {id: 6, name :"Artem Schiva"},
      ],

   messages : [
      {id: 1, message :"Привет!", belong: 'opponent',},
      {id: 2, message :"Я сейчас занят", belong: 'user',},
      {id: 3, message :"Когда сможешь?", belong: 'opponent',},
      {id: 4, message :"В следующий понедельник", belong: 'user',},
      { id: 5, message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         belong: 'opponent',},
      {id: 6, message :"Хорошо, пока!", belong: 'user',},
      {id: 7, message:"Привет!", belong: 'opponent',},
      {id: 8, message :"Я сейчас занят", belong: 'user',},
      {id: 9, message :"Когда сможешь?", belong: 'opponent',},
      {id: 10, message :"В следующий понедельник", belong: 'user',},
      {id: 11, message:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
         belong: 'opponent',},
      {id: 12, message:"Хорошо, пока!", belong: 'user',},
   ],
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         let newMessage = {
            id: state.messages.length + 1,
            message: action.newMessageBody,
            belong: 'user',
         }
         
         let stateCopy = {
            ...state,
            messages: [...state.messages, newMessage],
         };
         
         return stateCopy;
      }
   
      default:
         return state;
   }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;