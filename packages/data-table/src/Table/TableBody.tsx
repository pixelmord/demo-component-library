import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTableRowGroup } from 'react-aria';

export type TableBodyProps = PropsWithChildren<ComponentProps<'tbody'>>;

export const TableBody: FC<TableBodyProps> = ({ children, ...props }) => {
  let { rowGroupProps } = useTableRowGroup();
  return (
    <tbody {...rowGroupProps} {...props}>
      {children}
    </tbody>
  );
};
