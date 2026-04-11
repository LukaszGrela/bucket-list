import type { IBucket, INote } from "../types";

export interface IProps extends IBucket {
  className?: string;
  addNoteHandler: (bucketId: string, note: string) => void;
  onDrop: (bucketId: string, item: Pick<INote, "bucketId" | "id">) => void;

  notes: INote[];
  loading?: boolean;
}
