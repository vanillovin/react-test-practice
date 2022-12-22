import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';

test('Prevent the minus, plus button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onAndOffbuttonElement = screen.getByTestId('onAndOff-button');
  fireEvent.click(onAndOffbuttonElement);
  const plusButtonElement = screen.getByTestId('plus-button');
  const minusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
