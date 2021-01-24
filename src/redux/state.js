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

  getState () {
    return this._state
  },

  _callSubscriber () {

  },

  //Add new post on Profile page
  addPost() {
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  //Update new post text
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  //Add new message on Dialogs page
  addMessage() {
    let newMessage = {
      id: 3,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  //Update new message text
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  //Obresver
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}; 

export default store;
window.store = store
