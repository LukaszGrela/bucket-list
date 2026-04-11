/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/Bucket.scss";
import { useCallback, type FC } from "react";
import { useDrop } from "react-dnd";
import { Note } from "../Note";
import { ItemTypes } from "../ItemTypes";
import { AddWithText } from "../../AddWithText";
import type { IProps } from "./types";
import { classNames } from "../../../utils/classNames";

const Bucket: FC<IProps> = ({
  id,
  name,
  className,
  notes,
  addNoteHandler,
  loading,
  onDrop,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.NOTE,
      canDrop: () => true,

      drop: (_, monitor) => {
        onDrop(id, monitor.getItem());

        return {
          bucketId: id,
        };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [],
  );
  const addNote = useCallback(
    (note: string) => {
      addNoteHandler(id, note);
    },
    [addNoteHandler, id],
  );
  return (
    <div
      ref={drop as never}
      className={classNames(
        "bucket",
        className,
        isOver && "over",
        canDrop && "can-drop",
      )}
    >
      <div className="bucket-content">
        <div className="bucket-name clearfix">
          {name} ({id})
        </div>
        <div className="notes-container clearfix">
          {loading
            ? "Notes loading..."
            : notes.map((note, _index) => <Note key={note.id} {...note} />)}
        </div>
        <div className="add-note clearfix">
          <AddWithText placeholder={"Type a note"} handleClick={addNote} />
        </div>
      </div>
    </div>
  );
};

export default Bucket;
