import { List, Map } from 'immutable';
import moment from 'moment';

const init = List([]);

export default function(todos = init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      let id = todos.count();

      let newTodo = {
        id: id,
        isDone: false,
        startDate: moment().format('h:mm:ss'),
        endDate: null,
        text: action.payload.todo
      }

      return todos.push(Map(newTodo));
    case 'TOGGLE_TODO':
      return todos.map(todo => {
        if (todo.get('id') === action.payload.id) {
          todo = todo.update('isDone', isDone => !isDone);

          let timeTaken = moment().format('h:mm:ss');

          if (todo.get('isDone') === false) {
            timeTaken = null;
          }

          todo = todo.update('endDate', endDate => timeTaken);

          return todo;
    	  } else {
  	      return todo;
    	  }
      });
    default:
      return todos;
  }
}
