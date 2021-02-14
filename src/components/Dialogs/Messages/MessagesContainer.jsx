import React from 'react';
import {
  sendMessageActionCreactor,
  updateNewMessageTextActionCreactor,
} from '../../../redux/dialogsReduser';
import StoreContext from '../../../StoreContext';
import Messages from './Messages';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreactor());
        };

        let onMessageChange = (text) => {
          let action = updateNewMessageTextActionCreactor(text);
          store.dispatch(action);
        };

        return (
          <Messages
            updateNewMessageText={onMessageChange}
            sendMessage={sendMessage}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
