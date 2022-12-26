import Type from '../Type';
import { render, screen } from '@testing-library/react';

test('서버로부터 상품 이미지 가져오기', async () => {
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImages = await screen.findAllByRole('img', {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(['Cookie product', 'Icecream product']);
});
