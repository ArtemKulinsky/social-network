import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/Dialogs-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {
   let addMessage = () => {
      props.dispatch(addMessageActionCreator());
   }

   let addNewMessageText = (text) => {
      props.dispatch(updateNewMessageTextActionCreator(text));
   }

   return ( <Messages addMessage={addMessage}
                     addNewMessageText={addNewMessageText} 
                     dialogsPage={props.dialogsPage} /> )
}

export default MessagesContainer;