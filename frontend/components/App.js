// frontend/components/App.js

import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  state = {
    todos: [],
    input: ''
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    const response = await axios.get('http://localhost:9000/api/todos');
    this.setState({ todos: response.data.data });
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleAddTodo = async () => {
    if (this.state.input.trim()) {
      const response = await axios.post('http://localhost:9000/api/todos', { name: this.state.input });
      this.setState({ todos: [...this.state.todos, response.data.data], input: '' });
    }
  }

  handleToggleTodo = async (id) => {
    const response = await axios.patch(`http://localhost:9000/api/todos/${id}`);
    const updatedTodos = this.state.todos.map(todo => todo.id === id ? response.data.data : todo);
    this.setState({ todos: updatedTodos });
  }

  handleClearCompleted = () => {
    const incompleteTodos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: incompleteTodos });
  }

  render() {
    return (
      <div>
        <Form
          input={this.state.input}
          handleInputChange={this.handleInputChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
        <TodoList todos={this.state.todos} handleToggleTodo={this.handleToggleTodo} />
      </div>
    );
  }
}

export default App;
