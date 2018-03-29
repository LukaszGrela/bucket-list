import React from 'react';
import { shallow } from 'enzyme';
import { AddBucketButton } from '../../../components/dragnote/AddBucketButton';


let wrapper, handleClick;
beforeEach(() => {
    handleClick = jest.fn();
    wrapper = shallow(<AddBucketButton 
        handleClick={handleClick}/>);
});

test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should execute callback action', () => {
    const button = wrapper.find('.add-bucket-button');

    expect(button).toHaveLength(1);

    button.simulate('click');

    expect(handleClick).toHaveBeenCalled();
})