export const arraySort = (array, sortType, byProp) => {
    const compareFunction = sortByProp(sortType, byProp);
    const arraySorted = [...array].sort(compareFunction);
    return arraySorted;
  };
  
  function sortByProp(sortType, byProp) {
    let compareFunction;
    if (byProp === 'id') {
      if (sortType) {
        compareFunction = createDescendingNumericSortFunction(byProp);
      } else {
        compareFunction = createAscendingNumericSortFunction(byProp);
      }
    } else {
      if (sortType) {
        compareFunction = createCompareFunction(byProp, true);
      } else {
        compareFunction = createCompareFunction(byProp, false);
      }
    }
    return compareFunction;
  }
  
  function createDescendingNumericSortFunction(byProp) {
    return function (firstVal, secondVal) {
      return firstVal[byProp] - secondVal[byProp];
    };
  }
  
  function createAscendingNumericSortFunction(byProp) {
    return function (firstVal, secondVal) {
      return secondVal[byProp] - firstVal[byProp];
    };
  }
  
  function createCompareFunction(byProp, ascending) {
    if (byProp !== 'company' && byProp === 'city') {
      return function (firstVal, secondVal) {
        return ascending
          ? firstVal[byProp]?.localeCompare(secondVal[byProp])
          : secondVal[byProp]?.localeCompare(firstVal[byProp]);
      };
    }
  
    if (byProp === 'city') {
      return function (firstVal, secondVal) {
        return ascending
          ? firstVal['address'][byProp]?.localeCompare(secondVal['address'][byProp])
          : secondVal['address'][byProp]?.localeCompare(firstVal['address'][byProp]);
      };
    }
  
    if (byProp === 'company') {
      return function (firstVal, secondVal) {
        return ascending
          ? firstVal[byProp]['name']?.localeCompare(secondVal[byProp]['name'])
          : secondVal[byProp]['name']?.localeCompare(firstVal[byProp]['name']);
      };
    }
  }
  