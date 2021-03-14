import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tables from './Tables';
import mockData from '../../mock_data/mockData.json';

describe('Tables component', () => {
  test('Renders correctly without teams', () => {
    render(<Tables isTeamsReady={false} persons={mockData.results} />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  })

  test('Renders correctly with teams', () => {
    render(<Tables isTeamsReady={true} persons={mockData.results} teamA={mockData.results} teamB={mockData.results} />);

    // There are two tables
    expect(screen.getAllByRole('table')).toHaveLength(2);
    // There is Team A text
    expect(screen.getByText('Team A')).toBeInTheDocument();
    // There is Team B text
    expect(screen.getByText('Team B')).toBeInTheDocument();
  })
})