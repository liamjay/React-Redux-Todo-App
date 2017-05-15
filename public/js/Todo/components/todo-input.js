import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div>
                <input type="text"
                  id="todo-input"
                  className="form-control"
                  placeholder={this.props.placeholder}
                />
                <div className="text-center">
                  <button className="btn btn-primary" id="submitBtn" onClick={this.props.onClick}>Add Todo</button>
                </div>
            </div>
        )
    }
}

export default TodoInput;
