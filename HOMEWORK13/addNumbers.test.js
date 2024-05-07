// *** task1 ***

const {addNumbers} = require('./addNumbers.js');

describe ('Add numbers function', () => {
  test('expect 0.1 + 0.2 = 0.3', () => {
    expect(addNumbers(0.1, 0.2)).toBe(0.3);
  });
});