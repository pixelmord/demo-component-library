import { useTableCell, useTableSelectionCheckbox } from 'react-aria';
import { GridNode } from '@react-types/grid';
import { Checkbox } from '../Checkbox';
import { Table } from '../Table';
import { FC, useRef } from 'react';
import { TableCellProps } from '../Table/TableCell';
import { TableState } from 'react-stately';
export type SelectableTableCheckboxCellProps = TableCellProps & {
  cell: GridNode<unknown> & { parentKey: string | number };
  state: TableState<object>;
};
export const SelectableTableCheckboxCell: FC<SelectableTableCheckboxCellProps> = ({ cell, state }) => {
  let ref = useRef<HTMLTableCellElement>(null);
  let { gridCellProps } = useTableCell({ node: cell }, state, ref);
  let { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey }, state);

  return (
    <Table.Cell {...gridCellProps} ref={ref}>
      <Checkbox {...checkboxProps} />
    </Table.Cell>
  );
};
