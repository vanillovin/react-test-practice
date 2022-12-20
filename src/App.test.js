import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  // screen object를 이용해 원하는 엘리먼트에 접근 (ID로 접근)
  const counterElement = screen.getByTestId('counter');
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});
