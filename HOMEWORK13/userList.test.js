// *** task2 ***

const {userList} = require('./userList.js');

describe("Test array", () => {
    test('Array contains "admin" element', () => {
        expect(userList).toContain('admin');
    });
    test('First element in array is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });
    test('Last element in array is “new_user_2”', () => {
        expect(userList[userList.length - 1]).toBe('new_user_2');
    });
    test('Array consists of five elements', () => {
        expect(userList.length).toBe(5);
    });
    test('Third element is of "string" type', () => {
        expect(typeof userList[2]).toBe('string');
    });
    test('8th element of array does not exist', () => {
        expect(userList.length).toBeLessThan(8);
    });
});