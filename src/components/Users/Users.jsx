import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.jpg';
class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={css.usersPage}>
        {this.props.users.map((user) => (
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
                  this.props.unfollow(user.id);
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(user.id);
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
