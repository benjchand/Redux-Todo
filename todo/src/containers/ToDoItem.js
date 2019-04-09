import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';



class ToDoItem extends Component {


    toggleComplete(e) {
        this.props.toggleComplete(this.props.index)
    }

    render() {
        return (
            <li>
                <input
                    type = "checkbox"
                    onChange ={this.toggleComplete.bind(this)}
                />
                {this.props.todoItem.value}
            </li>
        );
    }

}


export default connect (null, { toggleComplete })(ToDoItem);