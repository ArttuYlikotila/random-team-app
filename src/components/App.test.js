import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('Integration test of App component', async () => {
    render(<App />);

    expect(screen.getByTestId('App')).toMatchSnapshot();

    // Header is rendered
    expect(screen.getByRole('heading')).toBeInTheDocument();
    // Spinner is rendered
    expect(screen.getByRole('status')).toBeInTheDocument();
    // No buttons are rendered initially
    expect(screen.queryByRole('button')).toBeNull();

    // After users have been fetched, there is a table
    expect(await screen.findByRole('table')).toBeInTheDocument();
    // Button is rendered now as
    expect(screen.getByRole('button')).toBeInTheDocument();
    
    userEvent.click(screen.getByText('Create random teams'));

    // There are two tables now
    expect(screen.getAllByRole('table')).toHaveLength(2);
    // There are two buttons now
    expect(screen.getAllByRole('button')).toHaveLength(2);

    userEvent.click(screen.getByText('Show list of persons'));

    // There is only one table now
    expect(screen.getAllByRole('table')).toHaveLength(1);
  })
})
