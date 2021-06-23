import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessage } from '../../Redux/Dialogs-reducer'
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
   render() {
      return (<Dialogs {...this.props} />);
   }
   
}

let mapStatetoProps = (state) => {
   return {
      dialogs: state.dialogsReducer.dialogs,
      messages: state.dialogsReducer.messages,
   };
}

export default compose(
   connect(mapStatetoProps, { addMessage }),
   withAuthRedirect,
)(DialogsContainer);


