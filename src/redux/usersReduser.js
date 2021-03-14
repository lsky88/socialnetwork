const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

//InitialState
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
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    //Folow User
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

    //Unfolow User
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

    //Set Users
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    //Default
    default:
      return state;
  }
};

//ActionCreator
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReduser;
