import { render, screen } from '@testing-library/react';
import App from './App';

test('minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});
