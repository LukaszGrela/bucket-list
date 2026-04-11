/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styles/Bucket.scss";
import { useCallback, type FC } from "react";
import { Note } from "../Note";
import { ItemTypes } from "../ItemTypes";
import { AddWithText } from "../../AddWithText";
import type { IProps } from "./types";

const Bucket: FC<IProps> = ({
  id,
  name,
  className,
  notes,
  addNoteHandler,
  loading
}) => {
  const addNote = useCallback(
    (note: string) => {
      addNoteHandler(id, note);
    },
    [addNoteHandler, id],
  );
  return (
    <div className={"bucket" + (className ? " " + className : "")}>
      <div className="bucket-content">
        <div className="bucket-name clearfix">{name}</div>
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

// const dropZoneTarget = {
//   canDrop: (props: IProps, monitor: any) => {
//     return true;
//   },
//   drop: (props: IProps, monitor: any) => {
//     props.onDrop(props.id, monitor.getItem());
//   },
// };
// const collect = (connect: any, monitor: any) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// });

// export default DropTarget(ItemTypes.NOTE, dropZoneTarget, collect)(Bucket);
