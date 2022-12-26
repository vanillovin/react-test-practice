// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

// 모든 테스트가 시작하기 전에 서버를 listen
beforeAll(() => server.listen());

// 테스트 중에 추가한 핸들러들을 리셋해서 다른 테스트에 영향이 가지 않게
afterEach(() => server.resetHandlers());

// 테스트가 끝났을 때 서버를 클린업
afterEach(() => server.close());
