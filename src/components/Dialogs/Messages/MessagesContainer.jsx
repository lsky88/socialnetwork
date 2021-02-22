import { connect } from 'react-redux';
import {
  sendMessageActionCreactor,
  updateNewMessageTextActionCreactor,
} from '../../../redux/dialogsReduser';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreactor(text);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreactor());
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
export default MessagesContainer;
