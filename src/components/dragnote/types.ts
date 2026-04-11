export interface INote {
    id: string;
    bucketId: string;
    [key: string]: unknown;
}

export interface INotes {
    list: INote[];
    loading?: boolean;
}
