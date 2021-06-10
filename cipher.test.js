import cCipher from "./cipher";

test("test 1", () => {
  expect(cCipher("hi",1)).toBe("ij");
});

test("test 2", () => {
  expect(cCipher("world",2)).toBe("yqtnf");
});

test("test 3", () => {
  expect(cCipher("name",4)).toBe("reqi");
});

test("test 4", () => {
  expect(cCipher("cipher",5)).toBe("hnumjw");
});