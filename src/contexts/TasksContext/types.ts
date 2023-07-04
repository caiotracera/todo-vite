import { TaskProps } from '@/components/Task/types';

export type TasksContextData = {
  tasks: TaskProps[];
  tasksCreated: number;
  tasksCompleted: number;
  createTask: (task: TaskProps) => void;
  updateTask: (task: TaskProps) => void;
  deleteTask: (id: string) => void;
};

export type TasksProviderProps = {
  children: React.ReactNode;
};
