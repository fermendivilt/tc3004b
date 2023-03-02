const sum = require('./sum');

test('Suma de dos números', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Suma fallida de dos números', () => {
    expect(sum(2, 2)).not.toBe(3);
})