import React from 'react';
import DragNoteContainer from '../components/dragnote/DragNoteContainer';

import './styles/DragNote.scss';


class DragNote extends React.Component {
    render = () => {
        return (
            <div className='drag-note'>
                <header>Drag a Note</header>
                {/* Create a note bucket then create a note. You can create many buckets and move notes across. */}
                <DragNoteContainer />
            </div>
        )
    }
}
export default DragNote;