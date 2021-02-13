const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

//InitialState
let initialState = {
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Jose' },
    { id: 3, name: 'Sergey' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Julia' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hola, amigo!' },
  ],

  newMessageText: 'spartaaa',
};

const dialogsReduser = (state = initialState, action) => {
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
