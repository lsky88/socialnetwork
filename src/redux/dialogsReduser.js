const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReduser = (state, action) => {
  //Add new message on Dialogs page
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 3,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    //Update new message text
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

//ActionCreator
export const sendMessageActionCreactor = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreactor = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReduser;
