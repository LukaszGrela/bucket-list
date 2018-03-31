import React from 'react';
import { shallow } from 'enzyme';
import Bucket from '../../../components/dragnote/Bucket';

const identity = el => el;
const OriginalBucket = Bucket.DecoratedComponent;

let wrapper, addNoteHandler, onDrop, isOver, canDrop;

beforeEach(() => {
    addNoteHandler = jest.fn();
    onDrop = jest.fn();
    isOver = false;
    canDrop = false;

    wrapper = shallow(<OriginalBucket
        addNoteHandler={addNoteHandler}
        onDrop={onDrop}
        isOver={isOver}
        canDrop={canDrop}
        connectDropTarget={identity}
    />);

});

test('Should render corectly', () => {

    expect(wrapper).toMatchSnapshot();
})