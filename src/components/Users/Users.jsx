import React from 'react';
import css from './Users.module.css';

let Users = (props) => {

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img src="" alt="ava" />
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
          <div>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
