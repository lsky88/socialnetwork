const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let store = {
  _state: {
    //Profile Page
    profilePage: {
      posts: [
        { id: '1', message: 'wassup', likesCount: 15 },
        { id: '1', message: 'hi', likesCount: 20 },
      ],
      newPostText: 'skyyy',
    },

    //Dialogs Page
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Jose' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Maria' },
        { id: 5, name: 'Julia' },
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hola, amigo!' },
      ],

      newMessageText: 'spartaaa',
    },
    sidebar: {},
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  //Obresver
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //Dispatch
  dispatch(action) {
    //Add new post on Profile page
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    //Update new post text
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    //Add new message on Dialogs page
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    //Update new message text
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

//ActionCreator
export const addPostActionCreactor = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreactor = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageActionCreactor = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreactor = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
window.store = store;
