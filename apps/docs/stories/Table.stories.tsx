import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'data-table';
const meta: Meta<typeof Table> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/UI/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    data: [
      {
        firstName: 'Kermit',
        lastName: 'Muppet',
        age: 55,
      },
      {
        firstName: 'MS. Piggy',
        lastName: 'Muppet',
        age: 22,
      },
      {
        firstName: 'Swedish Chef',
        lastName: 'Muppet',
        age: 24,
      },
    ],
  },
};
