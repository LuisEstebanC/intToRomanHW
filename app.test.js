const convert = require('./app')


test('It returns an error if the input is not a number', () => {
    expect(() => convert('sd')).toThrow("The input should be an int");
  });

  test('It returns an error if the input is not an int', () => {
    expect(() => convert(1.2)).toThrow("The input should be an int");
  });

  test('It returns an error if the input is out of range', () => {
    expect(() => convert(0)).toThrow("It must be a number between 1 and 3999.");
    expect(() => convert(4000)).toThrow("It must be a number between 1 and 3999.");
  });


  test('It returns an I if the input is 1', () => {
    expect(convert(1)).toBe("I");
  });

  test('It returns an X if the input is 10', () => {
    expect(convert(10)).toBe("X");
  });