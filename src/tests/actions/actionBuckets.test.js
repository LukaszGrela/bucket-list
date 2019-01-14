import { addBucketStarted, ADD_BUCKET_STARTED } from "../../actions/actionBuckets";

test('Should create ADD_BUCKET_START correctly', () => {
    const action = addBucketStarted();
    expect(action).toEqual({
        type: ADD_BUCKET_STARTED
    });
});