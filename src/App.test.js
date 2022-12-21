import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';

test('When the plus button is pressed, the counter changes to 1', () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId('plus-button');
  fireEvent.click(plusButtonElement);
  // 카운터가 0에서 +1 돼서 1이 됨
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('When the minus button is pressed, the counter changes to -1', () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId('minus-button');
  fireEvent.click(minusButtonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});
