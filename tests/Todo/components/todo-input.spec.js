import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '../../../public/js/Todo/components/todo-input';

describe('TodoInput component', () => {
    let wrapper;
    let onClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TodoInput placholder="Test placeholder" onClick={onClick} />);
    });

    it('Should have rendered the component correctly', () => {
        expect(wrapper.length).toEqual(1);
    });
});