import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


import './styles/Note.scss';

class Note extends React.Component {
    render = () => {
        const { text, connectDragSource } = this.props;
        return connectDragSource(
            <div className='note'>{text}</div>
        )
    }
}
Note.propTypes = {
    type: PropTypes.oneOf([ItemTypes.NOTE]).isRequired,
    id: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
};
Note.defaultProps = {
    type: ItemTypes.NOTE
};
const dragSource = {
    canDrag: (props) => {
        return true;
    },
    beginDrag: (props) => {
        return {
            type: props.type,
            id: props.id,
            bucketId: props.bucketId
        };
    }
}
const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
})
export default DragSource(ItemTypes.NOTE, dragSource, collect)(Note);