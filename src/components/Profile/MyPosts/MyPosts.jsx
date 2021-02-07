import React from 'react';
import {
  addPostActionCreactor,
  updateNewPostTextActionCreactor,
} from '../../../redux/profileReduser';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreactor());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreactor(text);
    props.dispatch(action);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>New Post</div>
      <div className={css.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
