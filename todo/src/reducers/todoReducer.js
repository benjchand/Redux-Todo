import {
    NEW_TODO_ITEM,
    TOGGLE_COMPLETED_TASK
} from '../actions'


export default (todoList = [], action) => {
    switch (action.type) {
        case NEW_TODO_ITEM:
            return todoList.concat(action.payload);
        case TOGGLE_COMPLETED_TASK:
            todoList[action.payload].completed = !todoList[action.payload].completed;
            return todoList;
        default:
            return todoList;
    }
}