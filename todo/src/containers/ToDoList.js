import React from 'react';
import ToDoItem from './ToDoItem'


export default (props) => {
    const todoList = props.todoList.map((todoItem, i) => <ToDoItem todoItem={todoItem} key ={i} index={i} />);
    return (
        <ul>
           { todoList }
        </ul>
    );
};