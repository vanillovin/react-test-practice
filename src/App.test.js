import App from './App';
import { render, screen } from '@testing-library/react';

test('on/off button has royalblue color', () => {
  render(<App />);
  const onAndOffbuttonElement = screen.getByTestId('onAndOff-button');
  expect(onAndOffbuttonElement).toHaveStyle({ backgroundColor: 'royalblue' });
});
