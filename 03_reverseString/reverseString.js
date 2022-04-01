const reverseString = function(string) {
    reversedString = '';

    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString;
};

// alternative solution
// return string.split('').reverse().join('');

// Do not edit below this line
module.exports = reverseString;
