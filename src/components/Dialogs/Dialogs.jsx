import React from 'react';
import css from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemContainer from './DialogItem/DialogItemContainer';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <DialogItemContainer  store={props.store} />
      <MessagesContainer store={props.store} />
    </div>
  );
};

export default Dialogs;
