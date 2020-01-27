// Code your solution in this file!
const logDriverNames = function(drivers){
    for (const driver of drivers){
        console.log(driver.name);
    }
};

const logDriversByHometown = function(drivers, location){
    for (const driver of drivers){
        if (driver.hometown === location){
            console.log(driver.name);
        }
    }
};

const revSorter = function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
};

const driversByRevenue = function(drivers){
    return [...drivers].sort(revSorter);
};

const comparator = function (a, b) {
    return a.name.localeCompare(b.name);
  };

const driversByName = function(drivers){
    return [...drivers].sort(comparator);
};

const reduceDriversRevenue = function (total, driver, i, drivers) {
    return total + driver.revenue;
  };

const totalRevenue = function(drivers){
    return drivers.reduce(reduceDriversRevenue, 0);
};

const averageRevenue = function(drivers){
    return totalRevenue(drivers) / drivers.length;
};