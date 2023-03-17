import Head from 'next/head';
import { Table } from 'data-table';

const data = [
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
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Component Library Demo</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Component Library
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Demo
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Table data={data} />
        </div>
      </main>
    </div>
  );
}
