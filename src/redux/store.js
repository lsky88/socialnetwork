import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';

//Store
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
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
