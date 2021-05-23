import React from 'react';
import { Route } from 'react-router';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
   debugger;
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
            <Route path="/dialogs/1" render={ () => <Messages  dispatch={props.dispatch}
                                                               dialogsPage={props.dialogsPage} 
            /> } />
            <Route path="/dialogs/2" render={ () => <Messages  dispatch={props.dispatch}
                                                               dialogsPage={props.dialogsPage} /> } />
         </div>
      </div>
   )
}

export default Dialogs;