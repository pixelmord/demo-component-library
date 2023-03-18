import Head from 'next/head';
import { Table, TableProps } from 'data-table';
import { FC, ReactElement } from 'react';

const TestTable: FC<TableProps> = (props) => {
  const columns: { header: string | ReactElement; accessor: string }[] = [
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
  ];
  const data: Record<string, string | number>[] = [
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
    },
  ];
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

export default function Home() {
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
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <TestTable striped />
        </div>
      </main>
    </div>
  );
}
