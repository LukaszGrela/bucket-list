export const ADD_NOTE_STARTED = 'gd:ADD_NOTE_STARTED';
export const addNoteStarted = () => ({
    type:ADD_NOTE_STARTED
});
export const ADD_NOTE_FINISHED = 'gd:ADD_NOTE_FINISHED';
export const addNoteFinished = (bucketId, payload, success) => ({
    type:ADD_NOTE_FINISHED,
    bucketId, 
    payload,
    success
});
export const addNote = (bucketId, note) => {
    return (dispatch, getState) => {
        dispatch(addNoteStarted());
        return new Promise((resolve,reject) => {
            resolve({
                bucketId,
                id:'note-' + (Math.floor(Math.random() * 100000)),
                ...note
            });
        }).then((response) => {
            dispatch(addNoteFinished(bucketId, response, true));
        }).catch(error => {
            dispatch(addNoteFinished(bucketId, error, false));
        })
    }
}