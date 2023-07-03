import { PlusCircle, User, Trash } from '@phosphor-icons/react';

import { IconButton } from '@/components/IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: <Trash />,
  },
  argTypes: {
    icon: {
      options: ['No icon', 'plus-circle', 'user'],
      mapping: {
        'No icon': undefined,
        'plus-circle': <PlusCircle />,
        user: <User />,
      },
    },
  },
};

export const Loading: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    loading: true,
    icon: <Trash />,
  },
  argTypes: {
    icon: {
      options: ['No icon', 'plus-circle', 'user'],
      mapping: {
        'No icon': undefined,
        'plus-circle': <PlusCircle />,
        user: <User />,
      },
    },
  },
};
