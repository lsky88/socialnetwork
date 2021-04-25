// Imports =========================================

import React from 'react';
import css from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg';

// Users ============================================
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={css.usersPage}>
      {props.users.map((user) => (
        <div className={css.user} key={user.id}>
          <div>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="ava"
            />
          </div>
          <div className={css.userInfo}>
            <div>{user.name}</div>
            <div>{'user.location.city'},</div>
            <div>{'user.location.country'}</div>
          </div>
          <div>{user.status}</div>
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Follow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Unfollow
            </button>
          )}
        </div>
      ))}
      <div className={css.pages}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && css.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
