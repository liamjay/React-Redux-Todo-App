import React, { Component } from 'react';
import moment from 'moment';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  calculateTimeTaken(start, end) {
    let timeTaken = 'TBC';

    if (end !== null) {
      let startTime = moment(start, "HH:mm:ss a");
      let endTime   = moment(end, "HH:mm:ss a");
      let duration  = moment.duration(endTime.diff(startTime));
      let hours     = parseInt(duration.asHours());
      let minutes   = parseInt(duration.asMinutes()) - hours * 60;

      timeTaken = hours + 'h ' + minutes + 'm';
    }

    return timeTaken;
  }

  render() {
    let listItems = this.props.todos.map((todo) => {
        return (
          <div key={todo.get('id')} className="todo-item">
            <div className="custom-checkbox">
              <input type="checkbox"
                id={"is-done-" + todo.get('id')}
                defaultChecked={todo.get('isDone')}
                onChange={this.props.onCheck} />
              <label htmlFor={"is-done-" + todo.get('id')}></label>
            </div>
            <span className="todo-item-description">
              {todo.get('text')} - {this.calculateTimeTaken(todo.get('startDate'), todo.get('endDate'))}
            </span>
            <div className="clear"></div>
          </div>
        );
    });

    return (
      <div id="todo-items">
        {listItems}
      </div>
    );
  }
}

export default TodoList;
