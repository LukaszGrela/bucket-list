import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import { DropTarget, DragSource } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './styles/Bucket.scss';
import AddWithText from '../AddWithText';



class Bucket extends React.Component {

    addNote = (note) => {
        const { addNoteHandler, id } = this.props;
        addNoteHandler && addNoteHandler(id, note);
    }
    render = () => {
        const {
            id,
            connectDropTarget,
            isDragging,
            connectDragSource,
            name,
            className,
            addNoteHandler, notes = { list: [] } } = this.props;
        const list = notes.list.filter(note => note.bucketId === id);
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            connectDropTarget(
                <div style={{ opacity }}
                    className={'bucket' + (className ? ' ' + className : '')}>
                    <div className='bucket-content'>
                        <div className='bucket-name clearfix'>{name}</div>
                        <div className='notes-container clearfix'>
                            {
                                notes.loading ? "Notes loading..." :
                                    list.map((note, index) => <Note
                                        key={note.id}
                                        type={ItemTypes.NOTE}
                                        {...note} />)

                            }
                        </div>
                        <div className='add-note clearfix'>
                            <AddWithText
                                placeholder={'Type a note'}
                                handleClick={this.addNote}
                            />
                        </div>
                    </div>
                </div>
            ))
    };
}
Bucket.propTypes = {
    type: PropTypes.oneOf([ItemTypes.BUCKET]).isRequired,
    addNoteHandler: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    findBucket: PropTypes.func.isRequired,
    reorderBucket: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,


};
Bucket.defaultProps = {
    type: ItemTypes.BUCKET
};
const dropZoneTarget = {
    canDrop: (props, monitor) => {
        const { type } = monitor.getItem();
        return type === ItemTypes.NOTE || type === ItemTypes.BUCKET;
    },
    drop: (props, monitor) => {
        const { type } = monitor.getItem();
        if (type === ItemTypes.NOTE) {
            props.onDrop(props.id, monitor.getItem());
        }
    },
    hover: (props, monitor) => {
        const { id: draggedId, type } = monitor.getItem();
        const { id: overId } = props;
        if (type === ItemTypes.BUCKET) {
            const { index: overIndex } = props.findBucket(overId);
            props.reorderBucket(draggedId, overId, overIndex);
        }
    }
};
const collectDropZone = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});




const DropZoneBucket = DropTarget([ItemTypes.NOTE, ItemTypes.BUCKET],
    dropZoneTarget,
    collectDropZone)(Bucket);


const dragItemSource = {
    beginDrag: (props) => {
        return {
            type: props.type,
            id: props.id,
            originalOrder: props.order
        }
    },

    endDrag: (props, monitor) => {
        const { type, id: droppedId, originalOrder } = monitor.getItem();
        const didDrop = monitor.didDrop();

        if (!didDrop && type === ItemTypes.BUCKET) {
            props.reorderBucket(droppedId, undefined, originalOrder);
        }
    }
}
const collectDragItem = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const DragItemBucket = DragSource(ItemTypes.BUCKET,
    dragItemSource,
    collectDragItem)(DropZoneBucket);

export default DragItemBucket;