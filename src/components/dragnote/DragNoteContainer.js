import React from 'react';
import AddBucketButton from './AddBucketButton';
import { connect } from 'react-redux';
import { addBucket } from '../../actions/actionBuckets';

class DragNoteContainer extends React.Component {
    addBucket = () => {
        /*
        TODO: show input field for buckets
         */
        const { addBucket } = this.props;
        //create dummy bucket name
        addBucket('bucket-' + (Math.floor(Math.random() * 100000)));
    }
    render = () => {
        return (
            <div className='drag-note-container'>
                <div>This is the DnD component, it will contain buckets and notes</div>
                <div>Add Bucket Button -> Input Bucket Form
                -> Cancel|OK -> dispatch addBucket
                -> firebase Rejected->Show Error Message|Fulfilled
                -> update store with new Bucket
                -> update view</div>
                <div className='bucket-container'>
                    <AddBucketButton handleClick={this.addBucket} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = (dispatch, props) => ({
    addBucket: (name) => dispatch(addBucket(name))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragNoteContainer);