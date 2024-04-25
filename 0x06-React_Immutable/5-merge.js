import { List, Map } from 'immutable';

// Function to concatenate elements of two arrays
function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

// Function to merge elements of two objects
function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(page2);
  return List(mergedMap.valueSeq());
}

export { concatElements, mergeElements };
