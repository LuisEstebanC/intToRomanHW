const convert = require('./app')


test('it should be a number', () => {
    expect(() => convert('sd')).toThrow("It must be a number between 1 and 3999.");
  });

  test('it should be an int ', () => {
    expect(() => convert(1.2)).toThrow("It must be a number between 1 and 3999.");
  });