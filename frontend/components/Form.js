// frontend/components/Form.js

import React from 'react';

class Form extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTodo();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" value={this.props.input} onChange={this.props.handleInputChange} />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={this.props.handleClearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default Form;

