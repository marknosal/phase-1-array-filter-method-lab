// Code your solution here
function findMatching(driverNames, string) {
    return driverNames.filter((blob) => blob.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch (myArray, letters) {
    return myArray.filter((blob) => blob.toUpperCase().indexOf(letters.toUpperCase()) === 0)
}

function matchName (finalArray, lastString) {
    return finalArray.filter((element) => element['name'] === lastString);
}