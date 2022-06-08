// Code your solution in this file!
const returnFirstTwoDrivers = function (driversList) {
    let newDriversList = [driversList[0], driversList[1]]
    return newDriversList
}
const returnLastTwoDrivers = function (driversList) {
    let newDriversList = [driversList[driversList.length - 2], driversList[driversList.length -1]]
    return newDriversList
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(inputValue) {
    return function (fareMult) { return fareMult * inputValue }
}

function fareDoubler(fareToDouble) {
    return fareToDouble * 2
}
function fareTripler(fareToTriple) {
    return fareToTriple * 3
}
function selectDifferentDrivers(arrayOfDrivers, passedFunction) {
    return passedFunction(arrayOfDrivers)
}
let foo = function () {
    return "bar";
  };