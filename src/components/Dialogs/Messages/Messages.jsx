import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
   let addMessage = (formData) => {
      props.addMessage(formData.newMessage);
   }

   return (
      <div className={s.messages}>
         <div className={s.messagesArea}>
            {
            props.messages.map((message) => <Message belong={message.belong} key={message.id} message={message.message} />)
            }
         </div>
         <NewMessageReduxForm onSubmit={addMessage}  addMessage={addMessage} />
      </div>
   )
}

const NewMessageForm = (props) => {
   return (
      <div className={s.messageAddNew}>
         <form onSubmit={props.handleSubmit} className={s.addForm}>
            <Field 
               name="newMessage"
               className={s.textarea}
               component="textarea"
            ></Field>
            <button className={s.addButton}>Send</button>
         </form>
      </div>
   );
}

const NewMessageReduxForm = reduxForm({
   form: "newMessage"
})(NewMessageForm);

export default Messages;