import { PlusCircle } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Task } from '@/components/Task';
import { TaskProps } from '@/components/Task/types';
import { useTasks } from '@/hooks/useTasks';

import * as S from './styles';

export function Home() {
  const {
    tasks,
    tasksCompleted,
    tasksCreated,
    deleteTask,
    updateTask,
    createTask,
  } = useTasks();

  function handleCompleteTask(task: TaskProps) {
    task.done = !task.done;

    updateTask(task);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: TaskProps = {
      id: uuidv4(),
      content: event.currentTarget.task.value,
      done: false,
    };

    createTask(task);
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.NewTask onSubmit={handleCreateTask}>
          <Input placeholder="Add a new task" name="task" />
          <Button rightIcon={<PlusCircle />} type={'submit'}>
            Criar
          </Button>
        </S.NewTask>

        <S.Tasks>
          <S.TasksHeader>
            <S.TasksCreated>
              Tarefas criadas <S.Counter>{tasksCreated}</S.Counter>
            </S.TasksCreated>
            <S.TasksCompleted>
              Tarefas concluídas{' '}
              <S.Counter>
                {tasksCompleted} de {tasksCreated}
              </S.Counter>
            </S.TasksCompleted>
          </S.TasksHeader>

          <S.TasksList>
            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                content={task.content}
                done={task.done}
                onCheck={() => handleCompleteTask(task)}
                onTrashClick={() => deleteTask(task.id)}
              />
            ))}
          </S.TasksList>
        </S.Tasks>
      </S.Content>
    </S.Wrapper>
  );
}
