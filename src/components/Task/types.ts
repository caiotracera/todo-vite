export type TaskProps = {
  id: string;
  content: string;
  done?: boolean;
  onTrashClick?: () => void;
  onCheck?: () => void;
};

export type ContentProps = {
  done: boolean;
};
