export const arraySort = (array, byProp, ascending) => {
    let compareFunction;
    if (typeof array[0][byProp] === 'number') {
        console.log(byProp);
        compareFunction = createNumericSortFunction(byProp, ascending);
    } else {
        compareFunction = createSortFunction(byProp, ascending);
    }
    const arraySorted = [...array].sort(compareFunction);
    return arraySorted
}


function createNumericSortFunction(byProp, ascending) {
    return function (firstVal, secondVal) {
        return ascending ? firstVal[byProp] - secondVal[byProp] : secondVal[byProp] - firstVal[byProp];
    }
}

function createSortFunction(byProp, ascending) {
    if (byProp !== 'company' && byProp !== 'city') {
        return (firstVal, secondVal) => ascending ? firstVal[byProp]?.localeCompare(secondVal[byProp]) : secondVal[byProp]?.localeCompare(firstVal[byProp]);
    }

    if (byProp === 'city') {
        return (firstVal, secondVal) => ascending ? firstVal['address'][byProp]?.localeCompare(secondVal['address'][byProp]) : secondVal['address'][byProp]?.localeCompare(firstVal['address'][byProp]);
    }

    if (byProp === 'company') {
        return (firstVal, secondVal) => ascending ? firstVal[byProp]['name']?.localeCompare(secondVal[byProp]['name']) : secondVal[byProp]['name']?.localeCompare(firstVal[byProp]['name']);
    }
}