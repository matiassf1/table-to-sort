export const arraySort = (array, sortType, byProp) => {
    const callbackSort = sortByProp(sortType, byProp)
    const arraySorted = [...array].sort(callbackSort);
    return arraySorted
}

function sortByProp(sortType, byProp) {
    let callbackSort;
    if (byProp === 'id') {
        if (sortType) {
            callbackSort = createDescendingNumericSortFunction(byProp);
        } else {
            callbackSort = createAscendingNumericSortFunction(byProp);
        }
    }
    else {
        if (!sortType) {
            callbackSort = zASort(byProp);
        } else {
            callbackSort = aZSort(byProp);
        }
    }

    return callbackSort;
}

function createDescendingNumericSortFunction(thirdVal) {
    return function (firstVal, secondVal) {
        return firstVal[thirdVal] - secondVal[thirdVal]
    }
}
function createAscendingNumericSortFunction(thirdVal) {
    return function (firstVal, secondVal) {
        return secondVal[thirdVal] - firstVal[thirdVal]
    }
}
function zASort(thirdVal) {
    const compareFunction = createCompareFunction(thirdVal, false);
    return compareFunction;
}
function aZSort(thirdVal) {
    const compareFunction = createCompareFunction(thirdVal, true);
    return compareFunction;
}

function createCompareFunction(byProp, ascending) {

    if (byProp !== 'company' && byProp !== 'city') {
        return ascending
            ? (firstVal, secondVal) => firstVal[byProp]?.localeCompare(secondVal[byProp])
            : (firstVal, secondVal) => secondVal[byProp]?.localeCompare(firstVal[byProp]);
    }

    if (byProp === 'city') {
        return ascending
            ? (firstVal, secondVal) => firstVal['address'][byProp]?.localeCompare(secondVal['address'][byProp])
            : (firstVal, secondVal) => secondVal['address'][byProp]?.localeCompare(firstVal['address'][byProp]);
    }

    if (byProp === 'company') {
        return ascending
            ? (firstVal, secondVal) => firstVal[byProp]['name']?.localeCompare(secondVal[byProp]['name'])
            : (firstVal, secondVal) => firstVal[byProp]['name']?.localeCompare(secondVal[byProp]['name']);
    }
}