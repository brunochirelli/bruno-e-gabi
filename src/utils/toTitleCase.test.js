import { toTitleCase } from "./toTitleCase";

test("toTitleCase - Basic functionality", () => {
  expect(toTitleCase("bruno")).toBe("Bruno");
  expect(toTitleCase(" ")).toBe("");
  expect(toTitleCase("BRUNO ")).toBe("Bruno");
  expect(toTitleCase("BRUNO chirelli")).toBe("Bruno Chirelli");
  expect(toTitleCase("123, str - zipcode 100-00")).toBe(
    "123, Str - Zipcode 100-00"
  );
  expect(toTitleCase("${__@@/")).toBe("${__@@/");

  expect(() => toTitleCase(123456)).toThrow(Error);
  expect(() => toTitleCase([])).toThrow(Error);
  expect(() => toTitleCase(undefined)).toThrow(Error);
  expect(() => toTitleCase({})).toThrow(Error);
});
