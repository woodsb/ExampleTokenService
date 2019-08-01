import { getToken } from '../../src/controllers/tokenController';

describe('token controller responses', () => {
  test('returns 400 with no email', () => {
    const req = {
      query: {},
    };

    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };

    getToken(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalledWith("{\"email\":[\"Email can't be blank\"]}");
  });
  test('returns 400 with invalid email', () => {
    const req = {
      query: {
        email: 'notAValidEmail',
      },
    };

    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };

    getToken(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalledWith('{"email":["Email Email format is not valid."]}');
  });

  test('returns a token with valid email', () => {
    const req = {
      query: {
        email: 'test@email.com',
      },
    };

    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };

    getToken(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith(expect.anything());
  });
});
