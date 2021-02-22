import { connect } from 'react-redux';
import DialogItem from './DialogItem';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

const DialogItemContainer = connect(mapStateToProps)(DialogItem);
export default DialogItemContainer;
