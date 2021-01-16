import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: '1', message: 'wassup', likesCount: 15 },
      { id: '1', message: 'hi', likesCount: 20 },
    ],
    newPostText: 'skyyy',
  },
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
      { id: 3, message: 'Wassup, bro!' },
      { id: 3, message: 'Yo!' },
      { id: 3, message: 'Hello!' },
    ],
  },
  sidebar: {},
};

//Add new post on Profile page
export let addPost = () => {
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
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state; 
