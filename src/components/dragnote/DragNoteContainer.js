import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Bucket from './Bucket';
import { connect } from 'react-redux';
import { addBucket, swapBuckets } from '../../actions/actionBuckets';
import { addNote } from '../../actions/actionNotes';


import './styles/DragNoteContainer.scss';
import AddWithText from '../AddWithText';
import { ItemTypes } from './ItemTypes';

class DragNoteContainer extends React.Component {
    addNote = (bucketId, note) => {
        /*
        TODO: show form modal
         */
        const { addNote } = this.props;
        addNote(bucketId, { text: note });
    }
    addBucket = (title) => {
        /*
        TODO: show input field for buckets
         */
        const { addBucket } = this.props;
        //create dummy bucket name
        addBucket(title);
    }
    onDrop = (bucketId, { id, bucketId: oldBucketId }) => {
        console.log(`Move note ${id} from bucket ${oldBucketId} to ${bucketId}`);
        const { swapBuckets } = this.props;
        swapBuckets(id, oldBucketId, bucketId);
    }
    render = () => {
        const { notes, buckets,
            reorderBucket,
            findBucket } = this.props;
        return (
            <div className='drag-note-container'>
                {/*<div>This is the DnD component, it will contain buckets and notes</div>
                <div>Add Bucket Button -> Input Bucket Form
                -> Cancel|OK -> dispatch addBucket
                -> firebase Rejected->Show Error Message|Fulfilled
                -> update store with new Bucket
                -> update view</div>
            */}
                <div className='drag-note-container-wrapper'>
                    <div className='main-content'>
                        <div className='bucket-container'>
                            <div className='bucket-list'>
                                {
                                    buckets.list.map((bucket, index) => <Bucket
                                        type={ItemTypes.BUCKET}
                                        className='item'
                                        key={bucket.id}
                                        {...bucket}
                                        notes={notes}
                                        onDrop={this.onDrop}
                                        reorderBucket={reorderBucket}
                                        findBucket={findBucket}
                                        addNoteHandler={this.addNote}
                                    />)
                                }
                                <div className='new-bucket'>
                                    <AddWithText
                                        placeholder={'Add new bucket'}
                                        handleClick={this.addBucket}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    buckets: state.buckets,
    notes: state.notes
});
const mapDispatchToProps = (dispatch, props) => ({
    addBucket: (name) => dispatch(addBucket(name)),
    addNote: (bucketId, note) => dispatch(addNote(bucketId, note)),
    swapBuckets: (noteId, fromBucketId, toBucketId) => dispatch(swapBuckets(noteId, fromBucketId, toBucketId)),
    reorderBucket: (bucketId, targetBucketId, order) => {
        console.log(`reorderBuckets(bucketId=${bucketId}, targetBucketId=${targetBucketId}, order=${order})`);
    },
    findBucket: (bucketId) => ({ index: -1, bucket: undefined })
});
export default
    DragDropContext(HTML5Backend)(connect(
        mapStateToProps,
        mapDispatchToProps
    )(DragNoteContainer));