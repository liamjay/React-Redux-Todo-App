import React from 'react';
import { mount } from 'enzyme';
import { List, Map } from 'immutable';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TodoApp from '../../../public/js/Todo/container/';

describe('TodoApp Container', () => {
    const initialState = List([
        Map({ id: 0, isDone: false, startDate: '10:30:00', endDate: null, text: 'Test Item 1' })
    ]);

    const props = {
        addTodo: jest.fn(),
	toggleTodo: jest.fn()
    };

    const mockStore = configureStore();

    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
	wrapper = mount(<Provider store={store}><TodoApp /></Provider>);
    });

    it('Should have rendered the component correctly', () => {
        expect(wrapper.length).toEqual(1)
    });
});
