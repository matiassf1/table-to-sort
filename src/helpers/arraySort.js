export const arraySort = (array, sortType, byProp) => {

    const callbackSort = sortByProp(sortType, byProp)
    const arraySorted = [...array.byProp].sort(callbackSort);

    return arraySorted
}

function sortByProp(sortType, byProp) {
    let callbackSort;
    if (sortType === '1-9') {
        callbackSort = fromLowestNumSort(byProp);
    }
    if (sortType === '9-1') {
        callbackSort = fromHighestNumSort(byProp);
    }
    if (sortType === 'Z-A') {
        callbackSort = zASort(byProp);
    }
    if (sortType === 'A-Z') {
        callbackSort = aZSort(byProp);
    }

    return callbackSort;
}
//here this two functions 'from' currently are not really necessary, but in case we want to sort 
//by mobile number or zip code, it would only be necessary to pass in the function this property
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
        return secondVal[thirdVal].localeCompare(firstVal[thirdVal])
    }
}
function aZSort(thirdVal) {
    return function (firstVal, secondVal) {
        return firstVal[thirdVal].localeCompare(secondVal[thirdVal])
    }
}