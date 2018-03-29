import { addBucketStart, ADD_BUCKET_START } from "../../actions/actionBuckets";

test('Should create ADD_BUCKET_START correctly', () => {
    const action = addBucketStart();
    expect(action).toEqual({
        type: ADD_BUCKET_START
    });
});