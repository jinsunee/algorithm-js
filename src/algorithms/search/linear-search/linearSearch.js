/**
 * Linear Search inplementation
 *
 * @param {*[]} array
 */

export default function linearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const foundIndices = [];

  array.forEach((element, index) => {
    if (comparator.equals(element, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}
