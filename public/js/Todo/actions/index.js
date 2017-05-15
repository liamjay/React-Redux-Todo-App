export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: {
      todo: todo
    }
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id: id
    }
  }
};
