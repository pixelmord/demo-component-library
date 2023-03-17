import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import '@testing-library/jest-dom';
describe('Table UI', () => {
  it('Table renders without crashing', () => {
    render(
      <Table
        data={[
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
        ]}
      />
    );

    const tableheader = screen.getByRole('columnheader', {
      name: /First Name/i,
    });

    expect(tableheader).toBeInTheDocument();
  });
});
