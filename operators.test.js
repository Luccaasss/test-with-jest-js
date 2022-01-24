const sum = require('./sum')
const sub = require('./sub')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('subtract 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3)
})

test('subtract 5 - 2 to equal 1', () => {
  expect(sub(10, 9)).toBe(1)
})