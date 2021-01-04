import Comparator from "../../../utils/comparator/Comparator";
/**
 * Linear Search inplementation
 *
 * @param {*[]} array
 */

export default function linearSearch(array, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const foundIndices = [];

  // 일치하면 index를 foundIndices에 담아서 return
  array.forEach((element, index) => {
    if (comparator.equals(element, seekElement)) {
      foundIndices.push(index);
    }
  });

  return foundIndices;
}
