// Memoization

// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// n:      1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// solve this using recursive method
// fib time complexity: O(2^n)

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));k
console.log(fib(50));
