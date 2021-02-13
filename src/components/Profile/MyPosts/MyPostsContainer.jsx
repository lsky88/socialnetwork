import React from 'react';
import {
  addPostActionCreactor,
  updateNewPostTextActionCreactor,
} from '../../../redux/profileReduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreactor());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreactor(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
