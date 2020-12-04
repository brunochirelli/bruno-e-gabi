/**
 * Group by a property
 *
 * @param {Array} objectArray Base Array
 * @param {String} property Property to search for
 * @returns {Array} Array of objects grouped by the category
 *
 */
export function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
