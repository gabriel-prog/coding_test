const digit_count = require('./digit_count')

test('start 5, end 10', () => {
  expect(digit_count(5, 10)).toStrictEqual([1, 1, 0, 0, 0, 1, 1, 1, 1, 1]);
});

test('start 12, end 321', () => {
  expect(digit_count(12, 321)).toStrictEqual([ 61, 169, 163, 83, 61, 61, 61, 61, 61, 61 ]);
});

test('start 100, end 10000', () => {
  expect(digit_count(100, 10000)).toStrictEqual([ 2884, 3981, 3980, 3980, 3980, 3980, 3980, 3980, 3980, 3980 ]);
});