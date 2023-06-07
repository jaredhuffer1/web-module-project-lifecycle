// frontend/components/TodoList.js

import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} handleToggleTodo={this.props.handleToggleTodo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
