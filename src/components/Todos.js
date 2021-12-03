import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { handleAddTodo, handleToggle, handleRemoveItem } from '../actions/todos';

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(
        this.input.value,
        () => this.input.value = ''
      )
    );
  }

  toggleItem = (todo) => {
    this.props.dispatch(handleToggle(todo.id));
  }

  removeItem = (todo) => {
    this.props.dispatch(handleRemoveItem(todo));
  }

  render() {
    return(
      <div>
        <h1>Todos</h1>
        <input type="text" placeholder="Insert Todo" ref={(input) => this.input = input} />
        <button onClick={this.addItem}>Add Todo</button>
        <List items={this.props.todos} toggle={this.toggleItem} remove={this.removeItem} />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos);