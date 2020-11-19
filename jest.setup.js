// @see https://github.com/facebook/jest/issues/2172
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
