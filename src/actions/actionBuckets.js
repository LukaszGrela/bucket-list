export const ADD_BUCKET_START = 'gd:ADD_BUCKET_START';
export const addBucketStart = () => ({
    type: ADD_BUCKET_START
});
export const ADD_BUCKET_FINISHED = 'gd:ADD_BUCKET_FINISHED';
export const addBucketFinished = (payload, success) => ({
    type: ADD_BUCKET_FINISHED,
    payload,
    success
});
export const addBucket = (name) => {
    return (dispatch, getState) => {
        dispatch(addBucketStart());
        return new Promise((resolve, reject) => { 
            resolve({ name });
        }).then((payload) => {
            dispatch(addBucketFinished(payload, true));
        }).catch(error => {
            // TODO: handle errors and manage messages
            dispatch(addBucketFinished(error, false));
        })
    }
};