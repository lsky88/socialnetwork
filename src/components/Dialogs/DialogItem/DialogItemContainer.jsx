import React from 'react';
import StoreContext from '../../../StoreContext';
import DialogItem from './DialogItem';
import css from './DialogItem.module.css';

const DialogItemContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return (
          <div className={css.DialogItem}>
            <DialogItem dialogs={state.dialogsPage.dialogs} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogItemContainer;
