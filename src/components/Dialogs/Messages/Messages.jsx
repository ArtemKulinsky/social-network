import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
   // debugger;
   let addMessage = (e) => {
      e.preventDefault();
      props.addMessage();
   }

   let addNewMessageText = (e) => {
      debugger;
      let text = e.target.value;
      props.addNewMessageText(text);
   }

   return (
      <div className={s.messages}>
         <div className={s.messagesArea}>
            {
            props.dialogsPage.messages.map((message) => <Message belong={message.belong} key={message.id} message={message.message} />)
            }
         </div>
            <div className={s.messageAddNew}>
               <form className={s.addForm}>
                  <textarea onChange={ addNewMessageText }
                           className={s.textarea}
                           value={props.dialogsPage.newMessage.text}></textarea>
               <button onClick={ addMessage } className={s.addButton}>Send</button>
               </form>
            </div>
      </div>
   )
}

export default Messages;