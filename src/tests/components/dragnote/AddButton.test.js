import React from 'react';
import { shallow } from 'enzyme';
import { AddButton } from '../../../components/dragnote/AddButton';


let wrapper, handleClick;
beforeEach(() => {
    handleClick = jest.fn();
    wrapper = shallow(<AddButton 
        handleClick={handleClick}/>);
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should execute callback action', () => {
    const button = wrapper.find('.add-button button');

    expect(button).toHaveLength(1);

    button.simulate('click');

    expect(handleClick).toHaveBeenCalled();
})