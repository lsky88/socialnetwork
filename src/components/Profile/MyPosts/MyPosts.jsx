import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    newPostElement.current.value = '';
    props.addPost(text);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement} />
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
