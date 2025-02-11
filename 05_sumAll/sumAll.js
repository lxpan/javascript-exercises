const sumAll = function(start, end) {
    sum = 0;

    if(start < 0 || end < 0) {
        return 'ERROR'
    }

    else if(typeof(start) !== 'number' || typeof(end) !== 'number') {
        return 'ERROR'
    }

    if(start > end) {
        _temp = start;
        start = end;
        end = _temp;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
