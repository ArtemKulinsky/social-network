import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
   
   if (!props.isAuth) return <Redirect to="/login" />;

   return (
      <div className={s.dialogs}>
         <div className={s.title}>Dialogs</div>
         <div className={s.dialogsBody}>
            <div className={s.dialogsItems}>
            {props.dialogs.map((dialog) => (
               <Dialog id={dialog.id} key={dialog.id} name={dialog.name} />
            ))}
            </div>
            <Route
            path="/dialogs/1"
            render={() => (
               <Messages
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                  messages={props.messages}
                  newMessage={props.newMessage}
               />
            )}
            />
            <Route
            path="/dialogs/2"
            render={() => (
               <Messages
                  addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText}
                  messages={props.messages}
                  newMessage={props.newMessage}
               />
            )}
            />
         </div>
      </div>
   );
}

export default Dialogs;