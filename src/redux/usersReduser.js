const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

//InitialState
let initialState = {
  users: [
    {
      id: '1',
      followed: true,
      photo: '',
      fullName: 'Igor',
      status: "i'm a boss!",
      location: { country: 'USA', city: 'San-Francisco' },
    },
    {
      id: '2',
      followed: true,
      photo: '',
      fullName: 'Alfia',
      status: "i'm a boss's wife!",
      location: { country: 'USA', city: 'San-Francisco' },
    },
    {
      id: '3',
      followed: false,
      photo: '',
      fullName: 'Stas',
      status: 'Like a boss!',
      location: { country: 'Russia', city: 'Magnitogorsk' },
    },
    {
      id: '4',
      followed: true,
      photo: '',
      fullName: 'Julia',
      status: 'Dragon is here!',
      location: { country: 'Russia', city: 'Magnitogorsk' },
    },
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
        users: state.users.map((users) => {
          if (users.id === action.userId) {
            return { ...users, followed: false };
          }
          return users;
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
