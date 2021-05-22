import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
   return (
      <div className={`${s.message} ${s[props.belong]}`} >
         <div className={s.messageImage}></div>
         <div className={s.messageText}>{ props.message }</div>
      </div>
   )
}

export default Message;