import { List, Map } from 'immutable';
import moment from 'moment';
import reducer from '../../../public/js/Todo/reducer/';

describe('reducer', () => {
  it('Should return the initial state', () => {
    let expectedDefaultState = List([]);
    let mockPayload = {
      type: 'TEST_CASE'
    };

    let actual = reducer(expectedDefaultState, mockPayload);
    expect(actual).toEqual(expectedDefaultState);
  });

  it('Should react to an action with the type `ADD_TODO`', () => {
    let mockedState = List([]);
    let mockedPayload = {
      type: 'ADD_TODO',
      payload: {
        todo: 'Test payload'
      }
    };

    let actual = reducer(mockedState, mockedPayload);
    actual = actual.get(0);

    let expectedtext = actual.get('text');

    expect(expectedtext).toEqual('Test payload');
  });

  it('Should react to an action with the type `TOGGLE_TODO`', () => {
    let mockedState = List([
        Map(
          {
            id: 0,
            isDone: false,
            startDate: moment().format('h:mm:ss'),
            endDate: null,
            text: 'Test state'
          }
        )
    ]);
    let mockedPayload = {
      type: 'TOGGLE_TODO',
      payload: {
        id: 0
      }
    };

    let actual = reducer(mockedState, mockedPayload);
    actual = actual.get(0);

    let expectedIsDone = actual.get('isDone');

    expect(expectedIsDone).toBeTruthy();
  });

  it('Should return original todo when reacted with action type `TOGGLE_TODO`', () => {
    let mockedState = List([
      Map({ id: 0, isDone: false, startDate: moment().format('h:mm:ss'), endDate: null, text: 'Test Item 1'})
    ]);

    let mockedPayload = {
      type: 'TOGGLE_TODO',
      payload: {
        id: 1
      }
    };

    let actual = reducer(mockedState, mockedPayload);

    expect(actual).toEqual(mockedState);
  });

  it('Should change the endDate when reacted with action type `TOGGLE_TODO`', () => {
    let mockedState = List([
      Map({ id: 0, isDone: true, startDate: '20:05:00', endDate: '20:10:00', text: 'Test Item 1'})
    ]);

    let expectedState = List([
      Map({ id: 0, isDone: false, startDate: '20:05:00', endDate: null, text: 'Test Item 1'})
    ]);

    let mockedPayload = {
        type: 'TOGGLE_TODO',
        payload: {
            id: 0
        }
    };

    let actual = reducer(mockedState, mockedPayload);

    expect(actual).toEqual(expectedState);
  });
});