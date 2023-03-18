import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from 'data-table';

const meta: Meta<typeof Pagination> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/UI/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 100,

    currentPage: 1,
  },
};
