const removeFromArray = function(array, value) {
    // handle optional arguments
    let args = Array.from(arguments);

    // filter out array items found in args array
    let filtered = array.filter(item => !args.includes(item));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
