import {createStore} from 'redux';
import db from './db';
import reducer from './reducer';

const store = createStore(reducer, {courses: db, selectedCourse: ''});
console.log(store.getState());
export default store;
