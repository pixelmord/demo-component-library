import type { Meta, StoryFn } from '@storybook/react';
import { Table } from 'data-table';
import { ReactElement } from 'react';
const meta: Meta<typeof Table> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/UI/Table',
  component: Table,
};

export default meta;
type Story = StoryFn<typeof Table>;

type Args = {
  data: Record<string, string | number>[];
  columns: { header: string | ReactElement; accessor: string }[];
};
const TableTemplate: Story = (args: Args) => {
  const { data, columns, ...props } = args;
  return (
    <Table {...props}>
      <Table.Head>
        {columns.map((col, index) => (
          <Table.HeadCell key={index}>{col.header}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((datum, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {columns.map((col, index) => (
              <Table.Cell key={index}>{datum[col.accessor]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const Default: Story = TableTemplate.bind({});

Default.args = {
  striped: false,
  hoverable: false,
  columns: [
    {
      header: 'First Name',
      accessor: 'firstName',
    },
    {
      header: 'Last Name',
      accessor: 'lastName',
    },
    {
      header: <span className="text-blue-500">Age</span>,
      accessor: 'age',
    },
  ],
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
};

export const Striped: Story = TableTemplate.bind({});
Striped.args = {
  ...Default.args,
  striped: true,
};
export const Hoverable: Story = TableTemplate.bind({});
Hoverable.args = {
  ...Default.args,
  striped: true,
  hoverable: true,
};
