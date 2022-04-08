const findTheOldest = function(array) {
    const sorted = array.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;

        if(a.hasOwnProperty('yearOfDeath') === false) {
            ageA = currentYear - a.yearOfBirth;
        } else if(b.hasOwnProperty('yearOfDeath') === false) {
            ageB = currentYear - b.yearOfBirth;
        } 

        return (ageA > ageB) ? -1 : 1;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
