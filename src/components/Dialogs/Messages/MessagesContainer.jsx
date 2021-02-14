import React from 'react';
import {
  sendMessageActionCreactor,
  updateNewMessageTextActionCreactor,
} from '../../../redux/dialogsReduser';
import Messages from './Messages';

const MessagesContainer = (props) => {
  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreactor());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreactor(text);
    props.store.dispatch(action);
  };

  return (
    <Messages
      updateNewMessageText={onMessageChange}
      sendMessage={sendMessage}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default MessagesContainer;
