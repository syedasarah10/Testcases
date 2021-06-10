import capitalize from "./capitalizeString";

test("test 1", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("test 2", () => {
  expect(capitalize("hEllo")).toBe("Hello");
});

test("test 3", () => {
  expect(capitalize("WoRlD")).toBe("World");
});
test("test 4", () => {
  expect(capitalize("")).toBe("");
});
test("test 5", () => {
  expect(capitalize("TIRED")).toBe("Tired");
});