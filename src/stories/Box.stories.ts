import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../components/Box';

const meta = {
  title: 'Example/Box',
  component: Box,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBox: Story = {
    args: {
        children: 'test'
    }
};
