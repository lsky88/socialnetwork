import React from 'react';
import css from './Users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers({
      users: [
        {
          id: 1,
          followed: true,
          photo: '',
          fullName: 'Igor',
          status: "i'm a boss!",
          location: { country: 'USA', city: 'San-Francisco' },
        },
        {
          id: 2,
          followed: false,
          photo: '',
          fullName: 'Alfia',
          status: "i'm a boss's wife!",
          location: { country: 'USA', city: 'San-Francisco' },
        },
      ],
    });
  }

  return (
    <div className={css.usersPage}>
      {props.users.map((user) => (
        <div className={css.user} key={user.id}>
          <div>
            <img src="" alt="ava" />
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
