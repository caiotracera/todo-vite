/* eslint-disable import/no-unused-modules */
import { createContext, useEffect, useState } from 'react';

import { TaskProps } from '@/components/Task/types';
import {
  getStorageItem,
  setStorageItem,
} from '@/utils/localStorage/localStorage';

import { TasksContextData, TasksProviderProps } from './types';

export const TasksDefaultValues: TasksContextData = {
  tasks: [],
  tasksCreated: 0,
  tasksCompleted: 0,
  createTask: () => null,
  updateTask: () => null,
  deleteTask: () => null,
};

export const TasksContext = createContext<TasksContextData>(TasksDefaultValues);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function saveTasks(tasks: TaskProps[]) {
    setTasks(tasks);
    setStorageItem({ key: 'tasks', value: tasks });
  }

  function createTask(task: TaskProps) {
    saveTasks([...tasks, task]);
  }

  function updateTask(task: TaskProps) {
    const taskIndex = tasks.findIndex((t) => t.id === task.id);

    if (taskIndex >= 0) {
      tasks[taskIndex] = task;

      saveTasks([...tasks]);
    }
  }

  function deleteTask(id: string) {
    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex >= 0) {
      tasks.splice(taskIndex, 1);

      saveTasks([...tasks]);
    }
  }

  useEffect(() => {
    const tasks = getStorageItem('tasks');

    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        tasksCreated: tasks.length,
        tasksCompleted: tasks.filter((task) => task.done).length,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
