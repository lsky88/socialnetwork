import { connect } from 'react-redux';
import {
  addPostActionCreactor,
  updateNewPostTextActionCreactor,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreactor(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreactor());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
