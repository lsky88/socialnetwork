import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import css from './Dialogs.module.css'


const Dialogs = (props) => {

  return (
    <div className={css.dialogs}>
    <DialogItem dialogs={props.dialogsPage.dialogs}
    />
    <Messages
    messages={props.dialogsPage.messages}
    newMessageText={props.dialogsPage.newMessageText} 
    dispatch={props.dispatch}/>
    </div>
  );
};

export default Dialogs;
