import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <DialogItem dialogs={props.dialogsPage.dialogs} />
      <MessagesContainer store={props.store} />
    </div>
  );
};

export default Dialogs;
