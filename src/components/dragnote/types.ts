export interface INote {
  id: string;
  bucketId: string;
  body: string;

  //   created_at;
  //   owner: userid;
}

export interface INotes {
  list: INote[];
  loading?: boolean;
}

export interface IBucket {
  id: string;

  name: string;

  //   created_at;
  //   owner: userid;
}
