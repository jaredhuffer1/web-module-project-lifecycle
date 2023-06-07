// frontend/components/Todo.js

import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.handleToggleTodo(this.props.todo.id)}>
        {this.props.todo.name} {this.props.todo.completed ? '(Completed)' : ''}
      </li>
    );
  }
}

export default Todo;
