const sum = require('./sum');

test("sum test", () => {
    expect(sum(1, 2)).toBe(3);
})

test("other sum test", () => {
    expect(sum(2, 4)).toBe(6);
})