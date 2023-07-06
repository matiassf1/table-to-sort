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
    else {
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

    if (thirdVal !== 'city' && thirdVal !== 'company') {
        return function (firstVal, secondVal) { return secondVal[thirdVal].localeCompare(firstVal[thirdVal]) }
    }
    if (thirdVal === 'city') {
        return function (firstVal, secondVal) {
            //to access address:{ city : 'cityName'}
            return secondVal['address'][thirdVal]?.localeCompare(firstVal['address'][thirdVal]);
        }
    }
    if (thirdVal === 'company') {
        return function (firstVal, secondVal) {
            //to access company:{ name : 'companyName'}
            return secondVal[thirdVal]['name']?.localeCompare(firstVal[thirdVal]['name']);
        }
    }

}
function aZSort(thirdVal) {
    if (thirdVal !== 'city' && thirdVal !== 'company') {
        return function (firstVal, secondVal) { return firstVal[thirdVal].localeCompare(secondVal[thirdVal]) }
    }
    if (thirdVal === 'city') {
        return function (firstVal, secondVal) {
            //to access address:{ city : 'cityName'}
            return firstVal['address'][thirdVal]?.localeCompare(secondVal['address'][thirdVal]);
        }
    }
    if (thirdVal === 'company') {
        return function (firstVal, secondVal) {
            //to access company:{ name : 'companyName'}
            return firstVal[thirdVal]['name']?.localeCompare(secondVal[thirdVal]['name']);
        }
    }
}