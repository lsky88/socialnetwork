import React from 'react';
import css from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import DialogItemContainer from './DialogItem/DialogItemContainer';

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <DialogItemContainer />
      <MessagesContainer />
    </div>
  );
};

export default Dialogs;
