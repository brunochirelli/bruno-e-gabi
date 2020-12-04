/**
 * Get all categories and the last product added
 *
 * @param {Array} productList actual array of products
 *
 * The purpose of this function is to create a row with categories and populate
 * each category card with the last product added
 */
export const getLastCategoryItem = (productList) => {
  if (typeof productList === "object") {
    let categories = Array.from(
      new Set(productList.map((item) => item.category))
    );

    let res = [];

    while (categories.length !== 0) {
      let cat = productList.find((item) => item.category === categories[0]);
      categories.shift();
      res.push(cat);
    }

    return res;
  }
  return productList;
};
