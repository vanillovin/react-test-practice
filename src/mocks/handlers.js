import { rest } from 'msw';

export const handlers = [
  // req: 매칭 요청에 대한 정보
  // res: 모의 응답을 생성하는 기능적 유틸리티
  // ctx: 모의 응답의 상태 코드, 헤더, 본문 등을 설정하는 데 도움이 되는 함수 그룸
  rest.get('http://locahost:5000/products', (req, res, ctx) => {
    return (
      res(
        ctx.json([
          {
            name: 'Cookie',
            imagePath: '/images/cookie.jpg',
          },
          {
            name: 'Icecream',
            imagePath: '/images/icecream.jpg',
          },
        ])
      ),
      rest.get('http://localhost:5000/options', (req, res, ctx) => {
        return res(
          ctx.json([
            {
              name: 'Chocolate',
            },
            {
              name: 'Splinkle',
            },
          ])
        );
      })
    );
  }),
];
