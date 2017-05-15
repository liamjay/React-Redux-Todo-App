import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';
import { addTodo, toggleTodo } from '../actions/index';
import '../styles/todo-app.scss';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  countListItems() {
    let doneCount = 0;

    this.props.todos.map(todo => {
      if (todo.get('isDone') === false) {
        doneCount++;
      }
    });

    return doneCount;
  }

  onClick() {
    let todo = document.getElementById('todo-input').value;

    if (todo.length > 0) {
      this.props.addTodo(todo);
    }
  }

  onCheck(e) {
    let elementId = e.target.id;
    let elementIdArr = elementId.split('is-done-');
    let id = parseInt(elementIdArr[1]);

    this.props.toggleTodo(id);
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="col-md-6 offset-md-3">
            <h1>To do list</h1>
            <TodoInput placeholder="Add a todo item"
              onClick={e => { e.preventDefault(); this.onClick(); }} />
          </div>
        </div>
        <div className="todo-list">
          <div className="col-md-6 offset-md-3">
            <div id="todo-count">{this.countListItems()}</div>
              <h4>Hey chief, some items of utmost importance await your attention</h4>
              <TodoList todos={this.props.todos}
                onCheck={e => { this.onCheck(e) }} />
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(TodoApp);
