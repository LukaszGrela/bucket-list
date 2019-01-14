export const ADD_BUCKET_STARTED = 'gd:ADD_BUCKET_STARTED';
export const addBucketStarted = () => ({
    type: ADD_BUCKET_STARTED
});
export const ADD_BUCKET_FINISHED = 'gd:ADD_BUCKET_FINISHED';
export const addBucketFinished = (payload, success) => ({
    type: ADD_BUCKET_FINISHED,
    payload,
    success
});
export const addBucket = (name) => {
    return (dispatch, getState) => {
        dispatch(addBucketStarted());
        return new Promise((resolve, reject) => {
            resolve({ name, id: 'bucket-' + (Math.floor(Math.random() * 100000)) });
        }).then((payload) => {
            dispatch(addBucketFinished(payload, true));
        }).catch(error => {
            // TODO: handle errors and manage messages
            dispatch(addBucketFinished(error, false));
        });
    };
};

export const SWAP_BUCKETS_STARTED = 'gd:SWAP_BUCKETS_STARTED';
export const swapBucketsStarted = () => ({
    type: SWAP_BUCKETS_STARTED
});
export const SWAP_BUCKETS_FINISHED = 'gd:SWAP_BUCKETS_FINISHED';
export const swapBucketsFinished = (payload, success) => {
    console.log('swapBucketsFinished',payload, success);
    return {
        type: SWAP_BUCKETS_FINISHED,
        payload, 
        success
    }
}

export const swapBuckets = (noteId, fromBucketId, toBucketId) => {
    return (dispatch, getState) => {
        dispatch(swapBucketsStarted());
        return new Promise((resolve, reject) => {
            console.log('Promise', noteId, fromBucketId, toBucketId);
            const payload = { noteId:noteId, fromBucketId:fromBucketId, toBucketId:toBucketId };
            console.log('payload', payload);
            resolve(payload);
        }).then((payload) => {
            console.log('resolved',noteId, fromBucketId, toBucketId);
            dispatch(swapBucketsFinished(payload, true));
        }).catch(error => {
            // TODO: handle errors and manage messages
            dispatch(swapBucketsFinished(error, false));
        });
    };
};