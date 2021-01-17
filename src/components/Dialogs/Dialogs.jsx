import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import css from './Dialogs.module.css';

const Message = (props) => {
  return <div className={css.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogsElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newDialogsElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={css.dialogsBlock}>
      <div>
        <textarea onChange={onMessageChange} ref={newDialogsElement} value={props.newMessageText}/>
      </div>
      <div>
        <button onClick={addMessage} >Send Message</button>
      </div>
      <div className={css.dialogs}>
        <div className={css.dialogsItems}>{dialogsElements}</div>
        <div className={css.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
