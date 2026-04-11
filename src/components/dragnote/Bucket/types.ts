import type { INotes } from "../types";

export interface IProps {
    id: string;
    name: string;
    className?: string;
    addNoteHandler: (bucketId: string, note: string) => void;
    onDrop: (bucketId: string, item: any) => void;
    isOver: boolean;
    canDrop: boolean;
    connectDropTarget: (element: React.ReactNode) => React.ReactElement;
    notes?: INotes;
}
