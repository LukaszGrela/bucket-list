import React from 'react';
import PropTypes from 'prop-types';
import AddBucketButton from './AddBucketButton';
import Note from './Note';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './styles/Bucket.scss';



class Bucket extends React.Component {

    addNote = () => {
        const { addNoteHandler, id } = this.props;
        addNoteHandler && addNoteHandler(id);
    }
    render = () => {
        const { id, connectDropTarget,
            name, className,
            addNoteHandler, notes = { list: [] } } = this.props;
        const list = notes.list.filter(note => note.bucketId === id);
        return connectDropTarget(

            <div className={'bucket' + (className ? ' ' + className : '')}>
                <div className='bucket-name'>{name}</div>
                <div className='notes-container'>
                    {
                        notes.loading ? "Notes loading..." :
                            list.map((note, index) => <Note key={note.id} {...note} />)

                    }
                    <div className='add-note'>
                        <AddBucketButton handleClick={this.addNote} />
                    </div>
                </div>
                <div className='bucket-toolbar'>Add Note</div>
            </div>
        )
    };
}
Bucket.propTypes = {
    addNoteHandler: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
};

const dropZoneTarget = {
    canDrop: (props, monitor) => {
        return true;
    },
    drop: (props, monitor) => {
        props.onDrop(props.id, monitor.getItem())
    }
};
const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

export default DropTarget(ItemTypes.NOTE,
    dropZoneTarget,
    collect)(Bucket);