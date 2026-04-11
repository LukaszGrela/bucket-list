import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { notesReducer } from "../reducers/notesReducer";
import { bucketsReducer } from "../reducers/bucketsReducer";

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      buckets: bucketsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
