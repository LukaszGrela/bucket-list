import {
  ADD_BUCKET_STARTED,
  ADD_BUCKET_FINISHED,
  type TBucketActions,
} from "../actions/actionBuckets";
import type { IBucket } from "../components/dragnote/types";

/*
{
bucket {
    id,
    name,
    created_at,
    owner:userid,
    notes: [id,..,idn-1]
}}
*/
const DEFAULT_STATE: {
  loading: boolean;
  error?: Error | null;
  list: IBucket[];
} = {
  loading: false,
  error: null,
  list: [],
};

export const bucketsReducer = (
  state = DEFAULT_STATE,
  action: TBucketActions,
) => {
  switch (action.type) {
    case ADD_BUCKET_STARTED:
      return { ...state, loading: true, error: null };

    case ADD_BUCKET_FINISHED: {
      const newState = { ...state, list: [...state.list], loading: false };
      if (action.success) {
        const bucket = action.payload;
        newState.list.push(bucket);
      } else {
        const error = action.payload;
        newState.error = error;
      }

      return newState;
    }
    default:
      return state;
  }
};
