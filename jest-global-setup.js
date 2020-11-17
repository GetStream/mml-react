// import { v4 as uuid } from 'uuid';

// jest.mock('uuid');

// describe('mock uuid', () => {
//   it('should return testid }', () => {
//     uuid.mockImplementation(() => '00000000-0000-0000-0000-000000000000');
//   });  
// });

// @see https://github.com/facebook/jest/issues/2172
// jest.mock('uuid', () => () => '00000000-0000-0000-0000-000000000000');

/* eslint-disable require-await */
module.exports = async () => {
  process.env.TZ = 'UTC';
};
