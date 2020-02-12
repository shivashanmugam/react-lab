import React from "react";
import Todo from '../components/Todo'
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selectors';

const TodoList = ({todos}) => {
    return (
        <div>
            <ul class="todo-list">
                {todos && todos.length ? todos.map((todo, index) => {
                    return <Todo todo={todo} key={`key-${todo.index}`} />;
                }) : 'No Todos, Yeh'}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({ todos: getTodosByVisibilityFilter(state, state.visibilityFilter) })

export default connect(mapStateToProps)(TodoList)
