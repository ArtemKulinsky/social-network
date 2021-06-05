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
      {id: 1, message :"Верни 3 сотки", belong: 'opponent',},
      {id: 2, message :"Я сейчас занят", belong: 'user',},
      {id: 3, message :"Когда сможешь?", belong: 'opponent',},
      {id: 4, message :"Я те говорю занят я", belong: 'user',},
      {id: 5, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
      {id: 6, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
      {id: 7, message :"Верни 3 сотки", belong: 'opponent',},
      {id: 8, message :"Я сейчас занят", belong: 'user',},
      {id: 9, message :"Когда сможешь?", belong: 'opponent',},
      {id: 10, message :"Я те говорю занят я", belong: 'user',},
      {id: 11, message :"Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!Возвращай три сотки, хуйло!", belong: 'opponent',},
      {id: 12, message :"Пошел нахуй пидорас гнилой сдохни тварь", belong: 'user',},
   ],

   newMessage: {
      text: '',
   }
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         let newMessage = {
         id: state.messages.length + 1,
         message: state.newMessage.text,
         belong: 'user',
         }
         
         let stateCopy = {
            ...state,
            messages: [...state.messages],
         };
         
         stateCopy.messages = [...state.messages, newMessage];
         // stateCopy.messages.push(newMessage);
         stateCopy.newMessage.text = '';
         return stateCopy;
      }

      case UPDATE_NEW_MESSAGE_TEXT: {
         let stateCopy = {...state};
         stateCopy.newMessage.text = action.newText;
         return stateCopy;
      }
   
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => 
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer;