import { Task } from '@/components/Task';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Task',
  component: Task,
  tags: ['autodocs'],
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa quia atque vitae eligendi aut tempore quos voluptas libero? Quae doloribus magnam voluptas maxime eius delectus vitae est iure autem.',
    done: false,
  },
};

export const Done: Story = {
  args: {
    id: '1',
    done: true,
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa quia atque vitae eligendi aut tempore quos voluptas libero? Quae doloribus magnam voluptas maxime eius delectus vitae est iure autem.',
  },
};
