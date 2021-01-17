let rerenderEntireTree = () => {

}

let state = {



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

    newMessageText:'spartaaa',
  },
  sidebar: {},
};

//Add new post on Profile page
export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

//Update new post text
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

//Add new message on Dialogs page
export const addMessage = () => {
  let newMessage = {
    id: 3,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

//Update new message text
export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

//Obresver
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state; 
