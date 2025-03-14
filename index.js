function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
}
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "bobby"));

function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase().startsWith(query.toLowerCase()));
}
console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "Bo"));
console.log(fuzzyMatch(drivers, "b"));

function matchName(drivers, query) {
    return drivers.filter((driver) => driver.name.toLowerCase() === query.toLowerCase());
}
const matchingDrivers = findMatching(drivers, "Bobby");
console.log(matchingDrivers); 