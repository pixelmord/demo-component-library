import { useRef, FC, ComponentProps, PropsWithChildren } from 'react';
import { Node } from '@react-types/shared';
import { useTableHeaderRow } from 'react-aria';
import { Table } from '../Table';
import { TableState } from 'react-stately';

export type SelectableTableHeadRowProps = PropsWithChildren<ComponentProps<'tr'>> & {
  item: Node<unknown>;
  state: TableState<object>;
};
export const SelectableTableHeadRow: FC<SelectableTableHeadRowProps> = ({ item, state, children }) => {
  let ref = useRef<HTMLTableRowElement>(null);
  let { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <Table.HeadRow {...rowProps} ref={ref}>
      {children}
    </Table.HeadRow>
  );
};
