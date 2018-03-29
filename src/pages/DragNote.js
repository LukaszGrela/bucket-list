import React from 'react';
import DragNoteContainer from '../components/dragnote/DragNoteContainer';

class DragNote extends React.Component {
    render = () => {
        return (
            <div className='drag-note'>
                Create a note bucket then create a note. You can create many buckets and move notes across.
                <DragNoteContainer />
            </div>
        )
    }
}
export default DragNote;