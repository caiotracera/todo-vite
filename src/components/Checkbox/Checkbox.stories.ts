import { Checkbox } from '@/components/Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
