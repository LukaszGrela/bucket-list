import type { INote } from "../components/dragnote/types";
import type { TAppDispatch } from "../store/types";

export const ADD_NOTE_STARTED = "gd:ADD_NOTE_STARTED" as const;
export const addNoteStarted = () => ({
  type: ADD_NOTE_STARTED,
});
export const ADD_NOTE_FINISHED = "gd:ADD_NOTE_FINISHED" as const;
export const addNoteFinished = (
  bucketId: string,
  payload: INote | Error,
  success: boolean,
): { type: typeof ADD_NOTE_FINISHED; bucketId: string } & (
  | { success: true; payload: INote }
  | { success: false; payload: Error }
) => {
  if (success) {
    return {
      type: ADD_NOTE_FINISHED,
      bucketId,
      payload: payload as INote,
      success: true,
    };
  } else {
    return {
      type: ADD_NOTE_FINISHED,
      bucketId,
      payload: payload as Error,
      success: false,
    };
  }
};
export const addNoteAction = (bucketId: string, note: Pick<INote, "body">) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dispatch: TAppDispatch /* , getState */) => {
    dispatch(addNoteStarted());
    return new Promise<INote>((resolve /* reject */) => {
      resolve({
        bucketId,
        id: "note-" + Math.floor(Math.random() * 100000),
        ...note,
      } as INote);
    })
      .then((response) => {
        dispatch(addNoteFinished(bucketId, response, true));
      })
      .catch((error: Error) => {
        dispatch(addNoteFinished(bucketId, error, false));
      });
  };
};

export type TNotesActions =
  | ReturnType<typeof addNoteStarted>
  | ReturnType<typeof addNoteFinished>;
