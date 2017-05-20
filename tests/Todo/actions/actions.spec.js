import { addTodo, toggleTodo} from '../../../public/js/Todo/actions/';

describe('actions', () => {
  describe('addTodo', () => {
    it('Should have a type of "ADD_TODO"', () => {
      let actual = addTodo('test action');
      expect(actual.type).toEqual('ADD_TODO');
    });

    it('Should have a payload of "test action"', () => {
      let actual = addTodo('test action');
      expect(actual.payload.todo).toEqual('test action');
    });
  });

  describe('toggleTodo', () => {
    it('Should have a type of "TOGGLE_TODO"', () => {
      let actual = toggleTodo(1);
      expect(actual.type).toEqual('TOGGLE_TODO');
    });

    it('Should have a payload of "1"', () => {
      let actual = toggleTodo(1);
      expect(actual.payload.id).toEqual(1);
    });
  });
});
