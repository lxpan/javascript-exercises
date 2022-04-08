// 1, 1, 2, 3
const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }
    if (n == 0) {
        return 0;
    }
    if(n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) == fib(1) + fib(0)

// Do not edit below this line
module.exports = fibonacci;
