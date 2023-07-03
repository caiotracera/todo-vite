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
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa quia atque vitae eligendi aut tempore quos voluptas libero? Quae doloribus magnam voluptas maxime eius delectus vitae est iure autem.',
  },
};

export const Done: Story = {
  args: {
    done: true,
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ipsa quia atque vitae eligendi aut tempore quos voluptas libero? Quae doloribus magnam voluptas maxime eius delectus vitae est iure autem.',
  },
};
