import { Header } from '@/components/Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};
