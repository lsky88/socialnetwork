import React from 'react';
import Dialog from './Dialog/Dialog';
import css from './DialogItem.module.css';

const DialogItem = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));
  return (
    <div className={css.DialogItem}>
      <div className={css.dialogs}>{dialogsElements}</div>
    </div>
  );
};

export default DialogItem;
