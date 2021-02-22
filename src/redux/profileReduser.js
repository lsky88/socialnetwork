const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//InitialState
let initialState = {
  posts: [
    { id: '1', message: 'wassup', likesCount: 15 },
    { id: '1', message: 'hi', likesCount: 20 },
  ],
  newPostText: 'skyyy',
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    //Add new post on Profile page
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    //Update new post text
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

//ActionCreator
export const addPostActionCreactor = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreactor = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduser;
