import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTableContext } from './TableContext';
export type TableRowProps = PropsWithChildren<ComponentProps<'tr'>>;
export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const { hoverable, striped } = useTableContext();
  const classString = twMerge(
    striped && 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
    hoverable && 'hover:bg-gray-50 dark:hover:bg-gray-600',
    className
  );
  return (
    <tr data-testid="table-row-element" className={classString} {...props}>
      {children}
    </tr>
  );
};

export default TableRow;
