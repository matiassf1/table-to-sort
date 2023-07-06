export const arraySort = (array, sortType, byProp) => {
    const callbackSort = sortByProp(sortType, byProp)
    const arraySorted = [...array].sort(callbackSort);
    return arraySorted
}

function sortByProp(sortType, byProp) {
    let callbackSort;
    if (byProp === 'id') {
        if (sortType) {
            callbackSort = fromLowestNumSort(byProp);
        }
        if (!sortType) {
            callbackSort = fromHighestNumSort(byProp);
        }
    }
    if (byProp) {
        if (sortType) {
            callbackSort = aZSort(byProp);
        }
        if (!sortType) {
            callbackSort = zASort(byProp);
        }
    }

    return callbackSort;
}

function fromLowestNumSort(thirdVal) {
    return function (firstVal, secondVal) {
        return firstVal[thirdVal] - secondVal[thirdVal]
    }
}
function fromHighestNumSort(thirdVal) {
    return function (firstVal, secondVal) {
        return secondVal[thirdVal] - firstVal[thirdVal]
    }
}
function zASort(thirdVal) {
    return function (firstVal, secondVal) {
        if (thirdVal === 'city') {
            return secondVal['address'][thirdVal]?.localeCompare(firstVal['address'][thirdVal]);
        }
        return secondVal[thirdVal]?.localeCompare(firstVal[thirdVal])
    }
}
function aZSort(thirdVal) {
    return function (firstVal, secondVal) {
        if (thirdVal === 'city') {
            return firstVal['address'][thirdVal]?.localeCompare(secondVal['address'][thirdVal]);
        }
        return firstVal[thirdVal]?.localeCompare(secondVal[thirdVal])
    }
}