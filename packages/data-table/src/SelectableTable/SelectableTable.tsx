import { AriaTableProps, useTable } from 'react-aria';
import { Cell, Column, Row, TableBody, TableHeader, TableStateProps, useTableState } from 'react-stately';
import { FC, useRef } from 'react';
import { Table, TableProps } from '../Table';
import { SelectableTableHeadRow } from './SelectableTableHeadRow';
import { SelectableTableHeadCell } from './SelectableTableHeadCell';
import { SelectableTableRow } from './SelectableTableRow';
import { SelectableTableCell } from './SelectableTableCell';
import { SelectableTableCheckboxCell } from './SelectableTableCheckboxCell';
import { SelectaleTableSelectAllCell } from './SelectableTableSelectAllCell';
import { GridNode } from '@react-types/grid';

export type SelectableTableProps = TableStateProps<object> & AriaTableProps<object> & TableProps;
const SelectableTableComponent: FC<SelectableTableProps> = (props) => {
  let { selectionMode, selectionBehavior } = props;
  let state = useTableState({
    ...props,
    showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace',
  });

  let ref = useRef<HTMLTableElement>(null);
  let { collection } = state;
  let { gridProps } = useTable(props, state, ref);

  return (
    <Table {...gridProps} ref={ref} style={{ borderCollapse: 'collapse' }}>
      <Table.Head>
        {collection.headerRows.map((headerRow) => (
          <SelectableTableHeadRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props.isSelectionCell ? (
                <SelectaleTableSelectAllCell key={column.key} column={column} state={state} />
              ) : (
                <SelectableTableHeadCell key={column.key} column={column} state={state} />
              )
            )}
          </SelectableTableHeadRow>
        ))}
      </Table.Head>
      <Table.Body>
        {[...collection.body.childNodes].map((row) => (
          <SelectableTableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <SelectableTableCheckboxCell
                  key={cell.key}
                  cell={cell as GridNode<unknown> & { parentKey: string | number }}
                  state={state}
                />
              ) : (
                <SelectableTableCell key={cell.key} cell={cell} state={state} />
              )
            )}
          </SelectableTableRow>
        ))}
      </Table.Body>
    </Table>
  );
};

SelectableTableComponent.displayName = 'SelectableTable';

export const SelectableTable = Object.assign(SelectableTableComponent, {
  Head: TableHeader,
  Body: TableBody,
  Row,
  Cell,
  Column,
});
