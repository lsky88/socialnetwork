// Cases =================================================
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

//InitialState ===========================================
let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   photo: '',
    //   fullName: 'Igor',
    //   status: "i'm a boss!",
    //   location: { country: 'USA', city: 'San-Francisco' },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   photo: '',
    //   fullName: 'Alfia',
    //   status: "i'm a boss's wife!",
    //   location: { country: 'USA', city: 'San-Francisco' },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
};

//Users ====================================================
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    //Folow User ===========================================
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    //Unfolow User ==================================
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    //Set Users ======================================
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    //Set Current Page =======================================
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    //Set Total Users Count ===================================
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }

    //Default ==================================================
    default:
      return state;
  }
};

//ActionCreators =========================================================
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export default usersReduser;
