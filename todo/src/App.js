import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import ToDoList from './containers/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewToDoState = this.updateNewToDoState.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newToDo,
      completed: false
    });
    this.setState ({
      newToDo: ''
    });
  }

  updateNewToDoState(event) {
    this.setState({
      newToDo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit = {this.addTodo}>
          <input 
            onChange={this.updateNewToDoState}
            placeholder='Type Task Here'
            value = {this.state.newToDo}
          />
        </form>
        <ToDoList todoList={this.props.todoList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  };
};

export default connect(mapStateToProps, { addTodo })(App);
