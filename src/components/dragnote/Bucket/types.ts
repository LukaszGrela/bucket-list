import type { IBucket, INote } from "../types";

export interface IProps extends IBucket {
  className?: string;
  addNoteHandler: (bucketId: string, note: string) => void;
  onDrop: (bucketId: string, item: unknown) => void;
  isOver: boolean;
  canDrop: boolean;

  notes: INote[];
  loading?: boolean;
}
