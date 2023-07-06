export const arraySort = (array, sortType, byProp) => {
    const compareFunction = sortByProp(sortType, byProp)
    const arraySorted = [...array].sort(compareFunction);
    return arraySorted
}

function sortByProp(sortType, byProp) {
    let compareFunction;
    if (byProp === 'id') {
        if (sortType) {
            compareFunction = createDescendingNumericSortFunction(byProp);
        }
        else {
            compareFunction = createAscendingNumericSortFunction(byProp);
        }
    }
    else {
        if (sortType) {
            compareFunction = zASort(byProp);
        }
        else {
            compareFunction = aZSort(byProp);
        }
    }

    return compareFunction;
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
        if (ascending) {
            return function (firstVal, secondVal) {
                return firstVal[byProp]?.localeCompare(secondVal[byProp]);
            }
        } else {
            return function (firstVal, secondVal) {
                return secondVal[byProp]?.localeCompare(firstVal[byProp]);
            }
        }
    }

    if (byProp === 'city') {
        if (ascending) {
            console.log('ascending');
            return function (firstVal, secondVal) {
                return firstVal['address'][byProp]?.localeCompare(secondVal['address'][byProp]);
            }
        } else {
            return function (firstVal, secondVal) {
                return secondVal['address'][byProp]?.localeCompare(firstVal['address'][byProp]);
            }
        }
    }

    if (byProp === 'company') {
        if (ascending) {
            return function (firstVal, secondVal) {
                return firstVal[byProp]['name']?.localeCompare(secondVal[byProp]['name']);
            }
        } else {
            return function (firstVal, secondVal) {
                return secondVal[byProp]['name']?.localeCompare(firstVal[byProp]['name']);
            }
        }
    }
}