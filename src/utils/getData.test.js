import fetch from "isomorphic-fetch";

test("getChar - get one character", async () => {
  const data = await fetch("https://swapi.dev/api/planets/3/");
  const json = await data.json();
  expect(json).toMatchObject({ name: "Bruno" });
});
