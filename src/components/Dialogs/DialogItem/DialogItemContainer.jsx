import React from 'react';
import DialogItem from './DialogItem';
import css from './DialogItem.module.css';

const DialogItemContainer = (props) => {
  let state = props.store.getState();
  return (
    <div className={css.DialogItem}>
      <DialogItem dialogs={state.dialogsPage.dialogs} />
    </div>
  );
};

export default DialogItemContainer;
