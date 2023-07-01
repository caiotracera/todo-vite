import { Input } from '@/components/Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Adicione uma nova tarefa',
  },
};
