import { PlusCircle, User } from '@phosphor-icons/react';

import { Button } from '@/components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Criar',
  },
  argTypes: {
    leftIcon: {
      options: ['No icon', 'plus-circle', 'user'],
      mapping: {
        'No icon': undefined,
        'plus-circle': <PlusCircle />,
        user: <User />,
      },
    },
    rightIcon: {
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
    children: 'Criar',
  },
  argTypes: {
    leftIcon: {
      options: ['No icon', 'plus-circle', 'user'],
      mapping: {
        'No icon': undefined,
        'plus-circle': <PlusCircle />,
        user: <User />,
      },
    },
    rightIcon: {
      options: ['No icon', 'plus-circle', 'user'],
      mapping: {
        'No icon': undefined,
        'plus-circle': <PlusCircle />,
        user: <User />,
      },
    },
  },
};
