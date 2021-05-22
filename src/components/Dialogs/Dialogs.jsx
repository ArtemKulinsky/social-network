import React from 'react';
import { Route } from 'react-router';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.title}>
            Dialogs
         </div>
         <div className={s.dialogsBody}>
            <div className={s.dialogsItems}>
               {
                  props.dialogsPage.dialogs.map((dialog)=> <Dialog id={dialog.id} name={dialog.name} />)
               }
            </div>
            <Route path="/dialogs/1" render={ () => <Messages messages={props.dialogsPage.messages} /> } />
            <Route path="/dialogs/2" render={ () => <Messages messages={props.dialogsPage.messages} /> } />
         </div>
      </div>
   )
}

export default Dialogs;