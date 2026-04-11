import {
  ADD_NOTE_STARTED,
  ADD_NOTE_FINISHED,
  type TNotesActions,
} from "../actions/actionNotes";
import {
  SWAP_BUCKETS_FINISHED,
  type TSwapBucketsFinishedAction,
} from "../actions/actionBuckets";
import type { INote } from "../components/dragnote/types";

/*
note {
    id,
    body,
    created_at,
    owner:userid
}
 */
const DEFAULT_STATE: {
  loading: boolean;
  error?: Error | null;
  list: INote[];
} = {
  loading: false,
  error: null,
  list: [],
};
export const notesReducer = (
  state = DEFAULT_STATE,
  action: TNotesActions | TSwapBucketsFinishedAction,
) => {
  switch (action.type) {
    case ADD_NOTE_STARTED:
      return { ...state, loading: true, error: null };
    case ADD_NOTE_FINISHED: {
      const newState = { ...state, list: [...state.list], loading: false };
      if (action.success) {
        const note = action.payload;
        newState.list.push(note);
      } else {
        const error = action.payload;
        newState.error = error;
      }

      return newState;
    }
    case SWAP_BUCKETS_FINISHED: {
      const { payload, success } = action;

      if (success) {
        const { noteId, toBucketId: bucketId } = payload;
        // find note, and change the bucketId
        return {
          ...state,
          list: state.list.map((note) => {
            if (note.id === noteId) {
              return {
                ...note,
                bucketId,
              };
            } else {
              return note;
            }
          }),
        };
      }
      return state;
    }

    default:
      return state;
  }
};
