const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Luke Skywalker" });
  }, 5000);
});

export const getChar = async () => {
  const result = await myPromise;
  console.log(result);
  return result;
};
