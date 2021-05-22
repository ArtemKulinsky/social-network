import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';



const Messages = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = (event) => {
      event.preventDefault();
      
      let text = newMessageElement.current.value;
      alert(text);
   }
   return (
      <div className={s.messages}>
         <div className={s.messagesArea}>
            {
            props.messages.map((message) => <Message belong={message.belong} message={message.text} />)
            }
         </div>
            <div className={s.messageAddNew}>
               <form className={s.addForm}>
                  <textarea ref={newMessageElement} className={s.textarea}></textarea>
               <button onClick={ addMessage } className={s.addButton}>Send</button>
               </form>
            </div>
      </div>
   )
}

export default Messages;