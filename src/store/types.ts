import type { ThunkDispatch } from "redux-thunk";
import type { store } from "./index";
import type { Action } from "redux";

export type TStore = typeof store;
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = ThunkDispatch<TRootState, unknown, Action>;
