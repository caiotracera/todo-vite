export type TaskProps = {
  content: string;
  done?: boolean;
  onTrashClick?: () => void;
  onCheck?: () => void;
};

export type ContentProps = {
  done: boolean;
};
