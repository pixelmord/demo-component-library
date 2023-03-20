import type { Meta, StoryFn } from '@storybook/react';
import { SelectableTable } from 'data-table';
import { ReactElement } from 'react';
const meta: Meta<typeof SelectableTable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/UI/SelectableTable',
  component: SelectableTable,
};

export default meta;
type Story = StoryFn<typeof SelectableTable>;

type Args = {
  data: Record<string, string | number>[];
  columns: { header: string | ReactElement; key: string }[];
};
const TableTemplate: Story = (args: any) => {
  const { data, columns, ...props } = args;
  return (
    <SelectableTable {...props}>
      <SelectableTable.Head columns={columns}>
        {(column: Args['columns'][number]) => <SelectableTable.Column>{column.header}</SelectableTable.Column>}
      </SelectableTable.Head>
      <SelectableTable.Body items={data}>
        {(item: Args['data'][number]) => (
          <SelectableTable.Row>
            {(columnKey: string) => <SelectableTable.Cell>{item[columnKey]}</SelectableTable.Cell>}
          </SelectableTable.Row>
        )}
      </SelectableTable.Body>
    </SelectableTable>
  );
};

export const Default: Story = TableTemplate.bind({});

Default.args = {
  striped: false,
  hoverable: false,
  selectionMode: 'single',
  columns: [
    {
      header: 'First Name',
      key: 'firstName',
    },
    {
      header: 'Last Name',
      key: 'lastName',
    },
    {
      header: <span className="text-blue-500">Age</span>,
      key: 'age',
    },
  ],
  data: [
    {
      id: 1,
      firstName: 'Kermit',
      lastName: 'Muppet',
      age: 55,
    },
    {
      id: 2,
      firstName: 'MS. Piggy',
      lastName: 'Muppet',
      age: 22,
    },
    {
      id: 3,
      firstName: 'Swedish Chef',
      lastName: 'Muppet',
      age: 24,
    },
  ],
};

export const Striped: Story = TableTemplate.bind({});
Striped.args = {
  ...Default.args,
  selectionMode: 'multiple',
  striped: true,
};
export const Hoverable: Story = TableTemplate.bind({});
Hoverable.args = {
  ...Default.args,
  onRowAction: (key) => alert(`Opening item ${key}...`),
  striped: true,
  hoverable: true,
};
