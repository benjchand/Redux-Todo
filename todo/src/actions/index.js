export const NEW_TODO_ITEM = 'NEW_TODO_ITEM';
export const TOGGLE_COMPLETED_TASK = 'TOGGLE_COMPLETED_TASK';

export const addTodo = (todoEvent) => {
    return {
        type: NEW_TODO_ITEM,
        payload: todoEvent
    };
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETED_TASK,
        payload: index
    }
}