import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Controls from './Controls';
import mockData from '../../mock_data/mockData.json';

describe('Controls component', () => {
  test('Component Renders with one button', () => {
    render(<Controls isTeamsReady={false} teamA={[]}/>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  test('Component Renders with two buttons when teams are set', () => {
    render(<Controls isTeamsReady={true} teamA={[]}/>);

    // There is button for creating random teams
    expect(screen.getByText(/random teams/i)).toBeInTheDocument();
    // There is button for displaying list of persons
    expect(screen.getByText(/list of persons/i)).toBeInTheDocument();
  })

  test('Component Renders default view correctly with teams set', () => {
    render(<Controls isTeamsReady={false} teamA={mockData.results}/>);

    // There is button for creating random teams
    expect(screen.getByText(/random teams/i)).toBeInTheDocument();
    // There is button for displaying currently created teams
    expect(screen.getByText(/current teams/i)).toBeInTheDocument();
  })
})