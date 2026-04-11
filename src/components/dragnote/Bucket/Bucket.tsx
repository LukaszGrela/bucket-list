/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/Bucket.scss";
import React from "react";
import Note from "../Note";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import { AddWithText } from "../../AddWithText";
import type { IProps } from "./types";

class Bucket extends React.Component<IProps> {
  addNote = (note: string) => {
    const { addNoteHandler, id } = this.props;
    addNoteHandler(id, note);
  };
  render = () => {
    const {
      id,
      connectDropTarget,
      name,
      className,
      notes = { list: [] },
    } = this.props;
    const list = notes.list.filter((note) => note.bucketId === id);
    return connectDropTarget(
      <div className={"bucket" + (className ? " " + className : "")}>
        <div className="bucket-content">
          <div className="bucket-name clearfix">{name}</div>
          <div className="notes-container clearfix">
            {notes.loading
              ? "Notes loading..."
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              : list.map((note, _index) => <Note key={note.id} {...note} />)}
          </div>
          <div className="add-note clearfix">
            <AddWithText
              placeholder={"Type a note"}
              handleClick={this.addNote}
            />
          </div>
        </div>
      </div>,
    );
  };
}

const dropZoneTarget = {
  canDrop: (props: IProps, monitor: any) => {
    return true;
  },
  drop: (props: IProps, monitor: any) => {
    props.onDrop(props.id, monitor.getItem());
  },
};
const collect = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

export default DropTarget(ItemTypes.NOTE, dropZoneTarget, collect)(Bucket);
