import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import type { TableContextType } from './TableContext';
import { TableContext } from './TableContext';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { twMerge } from 'tailwind-merge';

import { TableRow } from './TableRow';
export type TableProps = PropsWithChildren<ComponentProps<'table'> & TableContextType>;

const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,

  ...props
}) => {
  const classString = twMerge('w-full text-left text-sm text-gray-500 dark:text-gray-400', className);

  return (
    <div data-testid="table-element" className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableContext.Provider value={{ striped, hoverable }}>
        <table className={classString} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
