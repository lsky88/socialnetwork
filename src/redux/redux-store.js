import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';

//Reducers
let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
});

//Store
let store = createStore(reducers);

export default store;
