import React from 'react';
import Messages from './Messages/Messages';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <DialogItem dialogs={props.dialogsPage.dialogs}/>
      <Messages
        messages={props.dialogsPage.messages}
        newMessageText={props.dialogsPage.newMessageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
