const findTheOldest = function(array) {
    const sorted = array.sort((a, b) => {
        const currentYear = new Date().getFullYear();

        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;

        if(!a.hasOwnProperty('yearOfDeath')) {
            ageA = currentYear - a.yearOfBirth;
        } else if(b.hasOwnProperty('yearOfDeath') === false) {
            ageB = currentYear - b.yearOfBirth;
        } 

        return (ageA > ageB) ? -1 : 1;
    });
    return sorted[0];
};

const _findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        oldestAge = _getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentAge = _getAge(current.yearOfBirth, current.yearOfDeath);

        return (currentAge > oldestAge) ? current : oldest;
    });
}

function _getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
