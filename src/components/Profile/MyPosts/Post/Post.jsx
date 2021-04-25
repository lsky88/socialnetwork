// Imports ======================================
import React from 'react';
import css from './Post.module.css';

// Post===============================
const Post = (props) => {
  return (
    <div className={css.item}>
      <img src="" alt="ava" />
      {props.message}
      <div>
        <span> ♥ </span> {props.likesCount}
      </div>{' '}
      Post1
    </div>
  );
};

export default Post;
