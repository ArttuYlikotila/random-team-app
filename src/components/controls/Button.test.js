import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
  test('Button has correct text content', () => {
    const callFunc = jest.fn();

    render(<Button callFunc={callFunc} text={'Test button'}/>)

    expect(screen.getByText('Test button')).toBeInTheDocument();
  })

  test('Button component calls function when clicked', () => {
    const callFunc = jest.fn();

    render(<Button callFunc={callFunc} text={'Test button'}/>)

    userEvent.click(screen.getByRole('button'));

    // Button click calls the function
    expect(callFunc).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByRole('button'));

    // Button clicks have called the function right amount of times
    expect(callFunc).toHaveBeenCalledTimes(4);
  })

  test('Button component calls function with right parameter', () => {
    const callFunc = jest.fn();

    render(<Button callFunc={callFunc} param={false} text={'Test button'}/>)

    userEvent.click(screen.getByRole('button'));

    expect(callFunc).toHaveBeenCalledWith(false);
  })
})