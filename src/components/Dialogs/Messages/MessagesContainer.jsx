import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/Dialogs-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsReducer,
   };
}

let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageActionCreator());
      },
      addNewMessageText: (text) => {
         debugger;
         dispatch(updateNewMessageTextActionCreator(text))
      }
   }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;