// *** task3 ***

const { circleLength, circleArea } = require('./calcCircle.js');

describe("To get circle length function", () => {
    test('If circle radius is 22, then circle length = 138.2', () => {
        expect(circleLength(22)).toBe(138.2);
    });
});

describe("To get circle area function", () => {
    test('If circle radius is 9, then approximate circle area = 254.47', () => {
        expect(circleArea(9)).toBeCloseTo(254.47);
    });
});

describe("Test circle functions without arguments", () => {
    test('circleLength function without arguments returns NaN', () => {
        expect(circleLength()).toBe(NaN);
    });

    test('circleArea function without arguments returns NaN', () => {
        expect(circleArea()).toBe(NaN);
    });
});