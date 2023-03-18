import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {}
export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, ...props }) => {
  const classString = twMerge('px-6 py-3', className);
  return (
    <th className={classString} {...props}>
      {children}
    </th>
  );
};

export default TableHeadCell;
