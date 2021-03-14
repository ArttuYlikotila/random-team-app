import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './Spinner';

describe('Spinner component', () => {
  test('Renders correctly', () => {
    render(<Spinner />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  })
})