import cal from "./calc";

test("test 1", () => {
  expect(cal.add(1,2)).toBe(3);
});

test("test 2", () => {
  expect(cal.subtract(5,4)).toBe(1);
});

test("test 3", () => {
    expect(cal.multiply(3,6)).toBe(18);
  });

  test("test 4", () => {
    expect(cal.divide(10,5)).toBe(2);
  });