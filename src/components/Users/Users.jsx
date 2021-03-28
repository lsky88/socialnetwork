// Imports =================================================
import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.jpg';

// Mount Component =======================================================================================
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  // Userlist Page Change ==============================================================================
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  // Rednder ==================================================
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    // Users Page JSX ================================================================
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
        <div className={css.pages}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && css.selectedPage}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
