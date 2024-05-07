// *** task4 ***

const foods = require('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

const min = 12;
const max = 40;

const arraySorted = foods.filterFoodPrice(food,min,max);

describe("Food array", () => {
    test ('Check sorted array length with min = 12 and max = 14', () => {
        expect(arraySorted).toHaveLength(3);
    });

    test ('Check sorted array if third element contains object pepper with price 27', () => {
        expect(arraySorted).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test ('Check sorted array if there are 2nd, 3rd, and 4th elements from not sorted array', () => {
        expect(arraySorted).toContainEqual(food[1],food[2],food[3]);
    });

    test ('Check sorted array if price of the first element greater than min value', () => {
        expect(arraySorted[0].price).toBeGreaterThan(min);
    });

    test ('Check sorted array if price of the third element less than max value', () => {
        expect(arraySorted[2].price).toBeLessThan(max);
    });

    test ('Check sorted array if there is no element with kind lemon and price 50', () => {
        expect(arraySorted).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    test ('Check that 6th element in the sorted array is undefined', () => {
        expect(arraySorted[5]).toBeUndefined();
    });

    test ('Check that length of the sorted array is not equal to length of not sorted array', () => {
        expect(arraySorted).not.toHaveLength(food.length);
    });
});