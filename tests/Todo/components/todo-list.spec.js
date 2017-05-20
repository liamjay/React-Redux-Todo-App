import React from 'react';
import { shallow } from 'enzyme';
import { List, Map } from 'immutable';
import TodoList from '../../../public/js/Todo/components/todo-list';

describe('TodoList component', () => {
    let wrapper;
    let mockList     = List([
        Map({ id: 0, isDone: false, startDate: '10:30:00', endDate: null, text: 'Test Item 1' }),
        Map({ id: 1, isDone: false, startDate: '10:35:00', endDate: null, text: 'Test Item 2' })
    ]);
    let mockFunction = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TodoList todos={mockList} onCheck={mockFunction} />);
    });

    it('Should have rendered the component correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Should have calculateTimeTaken() that returns `TBC`', () => {
        let actual = wrapper.instance().calculateTimeTaken('13:45:15', null);
        expect(actual).toEqual('TBC');
    });

    it('Should have calculateTimeTaken() that returns `0h 1m`', () => {
        let actual = wrapper.instance().calculateTimeTaken('13:45:00', '13:46:00');
        expect(actual).toEqual('0h 1m');
    });
});
