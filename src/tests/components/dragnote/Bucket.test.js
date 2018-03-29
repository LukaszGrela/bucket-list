import React from 'react';
import {shallow} from 'enzyme';
import Bucket from '../../../components/dragnote/Bucket';

test('Should render corectly', () =>{
     const wrapper = shallow(<Bucket />);

     expect(wrapper).toMatchSnapshot();
})