import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/Dialogs-reducer';
import Messages from './Messages';

// const MessagesContainer = () => {
//    // debugger;
//    return <StoreContext.Consumer> 
//       { store => {
//          let addMessage = () => {
//             store.dispatch(addMessageActionCreator());
//          }

//          let addNewMessageText = (text) => {
//             store.dispatch(updateNewMessageTextActionCreator(text));
//          }
//          console.log(store.getState());
//          return <Messages addMessage={addMessage}
//                   addNewMessageText={addNewMessageText} 
//                dialogsPage={store.getState().dialogsReducer} />
//       }
//    }
//    </StoreContext.Consumer>
// }

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