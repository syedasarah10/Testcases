import reverse from "./reverseString";

test("test 1", () => {
  expect(reverse("hi")).toBe("ih");
});

test("test 2", () => {
  expect(reverse("world")).toBe("dlrow");
});

test("test 3", () => {
  expect(reverse("reverse")).toBe("esrever");
});

test("test 4", () => {
  expect(reverse("IGNORE")).toBe("ERONGI");
});

test("test 5", () => {
  expect(reverse("Paper")).toBe("repaP");
});