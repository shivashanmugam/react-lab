import React from 'react';
import cx from "classnames";
import {toggleTodo} from '../redux/actions';
import { connect } from 'react-redux';

const Todo = ({ todo, toggleTodo }) => {
    return (
        <li
            className="todo-item"  onClick={() => { toggleTodo(todo.id) }/** dispatches actions to toggle todo */}>
            {todo && todo.completed ?  "👌" : "👋"}{todo.content}
        </li>
    )

}

export default connect(null, { toggleTodo } )(Todo)