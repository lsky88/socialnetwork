import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';
import usersReduser from './usersReduser';

//Reducers
let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser
});

//Store
let store = createStore(reducers);

export default store;
