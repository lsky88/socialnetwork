import React from 'react';
import css from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
  let DialogsElement = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogsElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let text = newDialogsElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={css.messagesBlock}>
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
          <button onClick={onSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
