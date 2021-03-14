import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonsTable from './PersonsTable';
import mockData from '../../mock_data/mockData.json';

describe('PersonsTable component', () => {
  test('Renders table', () => {
    render(<PersonsTable persons={mockData.results} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  })

  test('Renders columns and rows correctly', () => {
    render(<PersonsTable persons={mockData.results} />);

    // There are two column headers
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
    // There are two rowgroups
    expect(screen.getAllByRole('rowgroup')).toHaveLength(2);
    // There are five rows
    expect(screen.getAllByRole('row')).toHaveLength(5);
    // There are eight cells
    expect(screen.getAllByRole('cell')).toHaveLength(8);
  })

  test('Renders team name', () => {
    render(<PersonsTable persons={mockData.results} name={'A'} />);

    expect(screen.getByText('Team A')).toBeInTheDocument();
  })
})