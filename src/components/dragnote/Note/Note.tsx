import "../styles/Note.scss";
import { type FC } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../ItemTypes";
import type { IProps } from "./types";

const Note: FC<IProps> = ({
  bucketId,
  id,
  //   isDragging,
  //   isDropped,
  body,
}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.NOTE,
      item: { id, bucketId },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [id],
  );

  return (
    <div ref={dragRef as never} className="note" style={{ opacity }}>
      {body}
    </div>
  );
};

export default Note;
