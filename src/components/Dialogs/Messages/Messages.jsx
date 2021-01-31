import React from 'react';
import { addMessageActionCreactor, updateNewMessageTextActionCreactor } from '../../../redux/state';
import css from './Messages.module.css';
import Message from './Message/Message'

const Messages = (props) => {
  let DialogsElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogsElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreactor());
  };

  let onMessageChange = () => {
    let text = newDialogsElement.current.value;
    let action = updateNewMessageTextActionCreactor(text);
    props.dispatch(action);
  };

  return (
    <div className={css.messagesBlock}>
      <div className={css.dialog}>{props.message}</div>
      <div className={css.messages}>{DialogsElement}</div>
      <div className={css.sendMessageArea}>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newDialogsElement}
            value={props.newMessageText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Send Message</button>
        </div>
      </div>

    </div>
  );
};

export default Messages;
