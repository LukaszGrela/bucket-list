import {
  ADD_BUCKET_STARTED,
  ADD_BUCKET_FINISHED,
} from '../actions/actionBuckets';

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
const DEFAULT_STATE = {
  loading: false,
  error: null,
  list: [],
};
export const bucketsReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_BUCKET_STARTED:
      return { ...state, loading: true, error: null };
    case ADD_BUCKET_FINISHED:
      const { payload } = action;
      let error = null;
      let list = [...state.list];
      if (action.success === true) {
        list.push(payload);
      } else {
        error = payload;
      }
      return { ...state, loading: false, list, error };
    default:
      return state;
  }
};
