import mathFunctions from "../src/index";


describe('Math Functions', () => {
    test('sum with valid numbers', () => {
        expect(mathFunctions.sum(5, 10)).toBe(15);
    });

    test('sum with invalid input', () => {
        expect(mathFunctions.sum(parseInt('a'), 5)).toBe("Please enter valid values");
    });

    test('subtract with valid numbers', () => {
        expect(mathFunctions.subtract(10, 5)).toBe(5);
    });

    test('subtract with invalid input', () => {
        expect(mathFunctions.subtract(parseInt('a'), 5)).toBe("Please enter valid values");
    });

    test('multiply with valid numbers', () => {
        expect(mathFunctions.multiply(3, 4)).toBe(12);
    });

    test('multiply with invalid input', () => {
        expect(mathFunctions.multiply(parseInt('a'), 4)).toBe("Please enter valid values");
    });

    test('divide with valid numbers', () => {
        expect(mathFunctions.divide(10, 2)).toBe(5);
    });

    test('divide by zero', () => {
        expect(mathFunctions.divide(10, 0)).toBe("Cannot divide by zero");
    });

    test('divide with invalid input', () => {
        expect(mathFunctions.divide(parseInt('a'), 2)).toBe("Please enter valid values");
    });
});
