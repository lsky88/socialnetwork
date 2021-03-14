import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.jpg'

let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users​')
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div className={css.usersPage}>
      {props.users.map((user) => (
        <div className={css.user} key={user.id}>
          <div>
            <img src={userPhoto} alt="ava" />
          </div>
          <div className={css.userInfo}>
            <div>{user.fullName}</div>
            <div>{user.location.city},</div>
            <div>{user.location.country}</div>
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
    </div>
  );
};

export default Users;
