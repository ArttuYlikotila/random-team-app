import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  test('Renders correctly', () => {
    render(<Header />);

    expect(screen.getByRole('heading')).toMatchSnapshot();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  })
})