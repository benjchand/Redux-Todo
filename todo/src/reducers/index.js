import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const combinedReducers = combineReducers({
    todoList: todoReducer
});

export default combinedReducers;