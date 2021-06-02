import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/Dialogs-reducer';
import StoreContext from '../../../store-context';
import Messages from './Messages';

const MessagesContainer = () => {
   // debugger;
   return <StoreContext.Consumer> 
      { store => {
         let addMessage = () => {
            store.dispatch(addMessageActionCreator());
         }

         let addNewMessageText = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text));
         }
         console.log(store.getState());
         return <Messages addMessage={addMessage}
                  addNewMessageText={addNewMessageText} 
               dialogsPage={store.getState().dialogsReducer} />
      }
   }
   </StoreContext.Consumer>
}

export default MessagesContainer;