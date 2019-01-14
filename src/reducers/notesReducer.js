import { ADD_NOTE_STARTED, ADD_NOTE_FINISHED } from "../actions/actionNotes";
import { SWAP_BUCKETS_FINISHED } from "../actions/actionBuckets";

/*
note {
    id,
    body,
    created_at,
    owner:userid
}
 */
const DEFAULT_STATE = {
    loading: false,
    error: null,
    list: []
}
export const notesReducer = (state = DEFAULT_STATE, action) => {

    switch (action.type) {
        case ADD_NOTE_STARTED:
            return { ...state, loading: true, error: null };
        case ADD_NOTE_FINISHED:
            const { payload } = action;
            let error = null;
            let list = [...state.list];
            if (action.success === true) {
                list.push(payload);
            } else {
                error = payload;
            }
            return { ...state, loading: false, list, error };
        case SWAP_BUCKETS_FINISHED: {
            const { payload, success } = action;
            
            if (success) {
                const { noteId, toBucketId: bucketId } = payload;
                // find note, and change the bucketId
                return {
                    ...state,
                    list: state.list.map(note => {
                        console.log(note, noteId);
                        if (note.id === noteId) {
                            return {
                                ...note,
                                bucketId
                            }
                        } else {
                            return note;
                        }
                    })
                }
            }
        }
        default:
            return state;
    }
}