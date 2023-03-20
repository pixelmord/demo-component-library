import Head from 'next/head';
import { SelectableTable, Table, TableProps } from 'data-table';
import { FC, ReactElement, RefObject, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
type Column = { header: string | ReactElement; key: string };
const columns: Column[] = [
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
];
type Datum = Record<string, string | number>;
const data: Datum[] = [
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
];
const TestTable: FC<TableProps & { ref?: RefObject<HTMLTableElement> }> = (props) => {
  return (
    <Table {...props}>
      <Table.Head>
        <Table.HeadRow>
          {columns.map((col, index) => (
            <Table.HeadCell key={index}>{col.header}</Table.HeadCell>
          ))}
        </Table.HeadRow>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((datum, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            {columns.map((col, index) => (
              <Table.Cell key={index}>{datum[col.key]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};
export default function Home({ users }) {
  const [otherUsers, setUsers] = useState<User[] | null>(null);

  const handleGetUsers = () => {
    fetch('https://my.backend/users?take=10&skip=10')
      .then((res) => res.json())
      .then(setUsers);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Component Library Demo</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Component Library
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text px-2 text-transparent">
            Demo
          </span>
        </h1>
        <div className="prose mx-auto mt-5 max-w-xl dark:prose-invert sm:flex sm:flex-col sm:justify-center md:mt-8">
          <h2>Regular Table</h2>
          <p>
            This table implementation is for static content and can be configured to be styled as <em>striped</em> or{' '}
            <em>hoverable</em> or both
          </p>
          <TestTable striped />
          <hr className="my-3" />
          <h2>Selectable Table</h2>
          <p>This selectable table is a11y conform with a data-grid implementation, rows/cells can be selected</p>
          <h3>Singleselect</h3>
          <SelectableTable
            selectionMode="single"
            onRowAction={(key) => {
              const rowData = users.find((datum) => datum.id === key);
              toast('Selected row: ' + JSON.stringify(rowData));
            }}
          >
            <SelectableTable.Head columns={columns}>
              {(column: Column) => <SelectableTable.Column>{column.header}</SelectableTable.Column>}
            </SelectableTable.Head>
            <SelectableTable.Body items={users}>
              {(item: Datum) => (
                <SelectableTable.Row>
                  {(columnKey: string) => <SelectableTable.Cell>{item[columnKey]}</SelectableTable.Cell>}
                </SelectableTable.Row>
              )}
            </SelectableTable.Body>
          </SelectableTable>
          <h3>Multiselect</h3>
          <button
            className="group flex h-min items-center justify-center border border-transparent bg-gray-800 p-0.5 text-center font-medium text-white hover:bg-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:disabled:hover:bg-gray-800"
            onClick={() => handleGetUsers()}
          >
            Get Users
          </button>
          <SelectableTable selectionMode="multiple">
            <SelectableTable.Head columns={columns}>
              {(column: Column) => <SelectableTable.Column>{column.header}</SelectableTable.Column>}
            </SelectableTable.Head>
            <SelectableTable.Body items={otherUsers || []}>
              {(item: Datum) => (
                <SelectableTable.Row>
                  {(columnKey: string) => <SelectableTable.Cell>{item[columnKey]}</SelectableTable.Cell>}
                </SelectableTable.Row>
              )}
            </SelectableTable.Body>
          </SelectableTable>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://my.backend/users?take=10&skip=0');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
