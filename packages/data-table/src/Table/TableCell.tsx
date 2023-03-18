import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {}
export const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  const classString = twMerge('px-6 py-4', className);
  return (
    <td className={classString} {...props}>
      {children}
    </td>
  );
};

export default TableCell;
