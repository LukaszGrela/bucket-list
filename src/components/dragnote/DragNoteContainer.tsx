import "./styles/DragNoteContainer.scss";
import { useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Bucket } from "./Bucket";
import {
  addBucketAction,
  swapBucketsAction,
} from "../../actions/actionBuckets";
import { addNoteAction } from "../../actions/actionNotes";

import { AddWithText } from "../AddWithText";
import { useDispatch, useSelector } from "react-redux";
import { type TAppDispatch, type TRootState } from "../../store/types";
import type { INote } from "./types";

const DragNoteContainer = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const addNote = useCallback(
    (bucketId: string, note: string) => {
      /*
        TODO: show form modal
      */
      dispatch(addNoteAction(bucketId, { body: note }));
    },
    [dispatch],
  );
  const addBucket = useCallback(
    (title: string) => {
      /*
      TODO: show input field for buckets
      */
      dispatch(addBucketAction(title));
    },
    [dispatch],
  );
  const onDrop = useCallback(
    (bucketId: string, dragItem: Pick<INote, "bucketId" | "id">) => {
      console.log("onDrop", dragItem);
      const { id, bucketId: oldBucketId }: Pick<INote, "bucketId" | "id"> =
        dragItem;
      console.log(`Move note ${id} from bucket ${oldBucketId} to ${bucketId}`);

      dispatch(swapBucketsAction(id, oldBucketId, bucketId));
    },
    [dispatch],
  );

  const notes = useSelector((state: TRootState) => state.notes);
  const buckets = useSelector((state: TRootState) => state.buckets);

  return (
    <div className="drag-note-container">
      {/*<div>This is the DnD component, it will contain buckets and notes</div>
                <div>Add Bucket Button -> Input Bucket Form
                -> Cancel|OK -> dispatch addBucket
                -> firebase Rejected->Show Error Message|Fulfilled
                -> update store with new Bucket
                -> update view</div>*/}
      <div className="drag-note-container-wrapper">
        <div className="main-content">
          <div className="bucket-container">
            <div className="bucket-list">
              {buckets.list.map((bucket) => (
                <Bucket
                  className="item"
                  key={bucket.id}
                  {...bucket}
                  notes={notes.list.filter(
                    (note) => note.bucketId === bucket.id,
                  )}
                  onDrop={onDrop}
                  addNoteHandler={addNote}
                  loading={notes.loading}
                />
              ))}
              <div className="new-bucket">
                <AddWithText
                  placeholder={"Add new bucket"}
                  handleClick={addBucket}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DragNoteContainerWrapper = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragNoteContainer />
    </DndProvider>
  );
};

export default DragNoteContainerWrapper;
