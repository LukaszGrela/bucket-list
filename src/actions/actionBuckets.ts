import type { IBucket } from "../components/dragnote/types";
import type { TAppDispatch } from "../store/types";

export const ADD_BUCKET_STARTED = "gd:ADD_BUCKET_STARTED" as const;
export const addBucketStarted = () => ({
  type: ADD_BUCKET_STARTED,
});
export const ADD_BUCKET_FINISHED = "gd:ADD_BUCKET_FINISHED" as const;
export const addBucketFinished = (
  payload: IBucket | Error,
  success: boolean,
): { type: typeof ADD_BUCKET_FINISHED } & (
  | { success: true; payload: IBucket }
  | { success: false; payload: Error }
) => {
  if (success) {
    return {
      type: ADD_BUCKET_FINISHED,
      payload: payload as IBucket,
      success: true,
    };
  } else {
    return {
      type: ADD_BUCKET_FINISHED,
      payload: payload as Error,
      success: false,
    };
  }
};
export const addBucketAction = (name: string) => {
  return (dispatch: TAppDispatch) => {
    dispatch(addBucketStarted());
    return new Promise<IBucket>((resolve) => {
      resolve({ name, id: "bucket-" + Math.floor(Math.random() * 100000) });
    })
      .then((payload) => {
        dispatch(addBucketFinished(payload, true));
      })
      .catch((error) => {
        // TODO: handle errors and manage messages
        dispatch(addBucketFinished(error, false));
      });
  };
};

export const SWAP_BUCKETS_STARTED = "gd:SWAP_BUCKETS_STARTED" as const;
export const swapBucketsStarted = () => ({
  type: SWAP_BUCKETS_STARTED,
});
export const SWAP_BUCKETS_FINISHED = "gd:SWAP_BUCKETS_FINISHED" as const;
export const swapBucketsFinished = (
  payload: ISwapBucketsPayload | Error,
  success: boolean,
): {
  type: typeof SWAP_BUCKETS_FINISHED;
} & (
  | { payload: ISwapBucketsPayload; success: true }
  | { payload: Error; success: false }
) => {
  console.log("swapBucketsFinished", payload, success);
  if (success) {
    return {
      type: SWAP_BUCKETS_FINISHED,
      payload: payload as ISwapBucketsPayload,
      success: true,
    };
  } else {
    return {
      type: SWAP_BUCKETS_FINISHED,
      payload: payload as Error,
      success: false,
    };
  }
};
export interface ISwapBucketsPayload {
  noteId: string;
  fromBucketId: string;
  toBucketId: string;
}
export const swapBucketsAction = (
  noteId: string,
  fromBucketId: string,
  toBucketId: string,
) => {
  return (dispatch: TAppDispatch) => {
    dispatch(swapBucketsStarted());
    return new Promise<ISwapBucketsPayload>((resolve) => {
      console.log("Promise", noteId, fromBucketId, toBucketId);
      const payload = {
        noteId: noteId,
        fromBucketId: fromBucketId,
        toBucketId: toBucketId,
      };
      console.log("payload", payload);
      resolve(payload);
    })
      .then((payload) => {
        console.log("resolved", noteId, fromBucketId, toBucketId);
        dispatch(swapBucketsFinished(payload, true));
      })
      .catch((error) => {
        // TODO: handle errors and manage messages
        dispatch(swapBucketsFinished(error, false));
      });
  };
};

export type TSwapBucketsFinishedAction = ReturnType<typeof swapBucketsFinished>;
export type TBucketActions =
  | ReturnType<typeof addBucketStarted>
  | ReturnType<typeof addBucketFinished>
  | ReturnType<typeof swapBucketsStarted>
  | TSwapBucketsFinishedAction;
