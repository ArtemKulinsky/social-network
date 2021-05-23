import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';



const Messages = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = (event) => {
      event.preventDefault();
      
      let text = props.dialogsPage.newMessage.text;
      props.addMessage(text);
   }

   let addNewMessageText = () => {
      let text = newMessageElement.current.value;
      props.addNewMessageText(text);
   }

   return (
      <div className={s.messages}>
         <div className={s.messagesArea}>
            {
            props.dialogsPage.messages.map((message) => <Message belong={message.belong} message={message.message} className={message.belong}/>)
            }
         </div>
            <div className={s.messageAddNew}>
               <form className={s.addForm}>
                  <textarea onChange={ addNewMessageText } 
                           ref={newMessageElement} 
                           className={s.textarea}
                           value={props.dialogsPage.newMessage.text}></textarea>
               <button onClick={ addMessage } className={s.addButton}>Send</button>
               </form>
            </div>
      </div>
   )
}

export default Messages;