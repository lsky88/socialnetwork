//Imports ===================================================
import { connect } from 'react-redux';
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from '../../redux/usersReduser';
import Users from './Users';

//State to Props ======================================
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

// Dispatch to props ====================================
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
  };
};

//Export =============================================================
export default connect(mapStateToProps, mapDispatchToProps)(Users);
