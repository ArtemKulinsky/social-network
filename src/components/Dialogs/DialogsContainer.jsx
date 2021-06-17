import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../Redux/Dialogs-reducer'
import { withAuthRedirect } from '../../hoc/AuthRedirect';

class DialogsContainer extends React.Component {
   render() {
      return (<Dialogs {...this.props} />);
   }
   
}

let withAuthRedirectComponent = withAuthRedirect(DialogsContainer)

let mapStatetoProps = (state) => {
   return {
      dialogs: state.dialogsReducer.dialogs,
      messages: state.dialogsReducer.messages,
      newMessage: state.dialogsReducer.newMessage,
   };
}

export default connect(mapStatetoProps, {
   addMessage,
   updateNewMessageText,
})(withAuthRedirectComponent);

