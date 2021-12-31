Synthesizing 10/10 solutions

=======

// console.log(fib(51));
// console.log(fib(52));
// console.log(fib(53));
// console.log(fib(54));
// console.log(fib(55));
// console.log(fib(56));
// console.log(fib(57));
// console.log(fib(58));
// console.log(fib(59));
// console.log(fib(60));
// console.log(fib(61));
// console.log(fib(62));
// console.log(fib(63));
// console.log(fib(64));
// console.log(fib(65));
// console.log(fib(66));
// console.log(fib(67));
// console.log(fib(68));
// console.log(fib(69));
// console.log(fib(70));
// console.log(fib(71));
// console.log(fib(72));
// console.log(fib(73));
// console.log(fib(74));
// console.log(fib(75));
// console.log(fib(76));
// console.log(fib(77));
// console.log(fib(78));
// console.log(fib(79));
// console.log(fib(80));
// console.log(fib(81));
// console.log(fib(82));
// console.log(fib(83));
// console.log(fib(84));
// console.log(fib(85));
// console.log(fib(86));
// console.log(fib(87));
// console.log(fib(88));
// console.log(fib(89));
// console.log(fib(90));
// console.log(fib(91));
// console.log(fib(92));
// console.log(fib(93));
// console.log(fib(94));
// console.log(fib(95));
// console.log

=======

// console.log(fib(100));
// console.log(fib(200));
// console.log(fib(300));
// console.log(fib(400));
// console.log(fib(500));
// console.log(fib(600));
// console.log(fib(700));
// console.log(fib(800));
// console.log(fib(900));
// console.log(fib(1000));
// console.log(fib(10000));
// console.log(fib(100000));
// console.log(fib(1000000));
// console.log(fib(10000000));
// console.log(fib(100000000));
// console.log(fib(1000000000));

=======


// Write a function `fibMemo(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
// The function should use a memoization technique to avoid computing the same Fibonacci number multiple times.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// n:      1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibMemo = (n) => {
    let cache = {};
    return fibHelper(n, cache);
};

const fibHelper = (n, cache) => {
    if (n <= 2) return 1;
    if (cache[n]) return cache[n];
    cache[n] = fibHelper(n - 1, cache) + fibHelper(n - 2, cache);
    return cache[n];
};

// console.log(fibMemo(6));
// console.log(fibMemo(7));
// console.log(fibMemo(8));
console.log(fibMemo(50));

=======


// Time: O(n)
// Space: O(n)

// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// n:      1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fib = (n) => {
    const cache = {};
    return fibHelper(n, cache);
};

const fibHelper = (n, cache) => {
    if (n <= 2) return 1;
    if (cache[n]) return cache[n];
    cache[n] = fibHelper(n - 1, cache) + fibHelper(n - 2, cache);
    return cache[n];
};

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
console.log(fib(50));

=======


// Write a function `fib2(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.
// This time, memoize the results in a cache object.

// n:      1, 2, 3, 4, 5, 6, 7, 8, 9, ...
// fib2(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fib2 = (n, cache = {}) => {
    if (n <= 2) return 1;
    if (cache[n]) return cache[n];
    cache[n] = fib2(n - 1, cache) + fib2(n - 2, cache);
    return cache[n];
};

// console.log(fib2(6));
// console.log(fib2(7));
// console.log(fib2(8));
console.log(fib2(50));

=======


// Time Complexity: O(n)
// Space Complexity: O(n)

=======


// fib(6) // 8
// fib(7) // 13
// fib(8) // 21
// fib(50) // 12586269025

// fib(50) = fib(49) + fib(48)
// fib(49) = fib(48) + fib(47)
// fib(48) = fib(47) + fib(46)
// fib(47) = fib(46) + fib(45)
// fib(46) = fib(45) + fib(44)
// fib(45) = fib(44) + fib(43)
// fib(44) = fib(43) + fib(42)
// fib(43) = fib(42) + fib(41)
// fib(42) = fib(41) + fib(40)
// fib(41) = fib(40) + fib(39)
// fib(40) = fib(39) + fib(38)
// fib(39) = fib(38) + fib(37)
// fib(38) = fib(37) + fib(36)
// fib(37) = fib(36) + fib(35)
// fib(36) = fib(35) + fib(34)
// fib(35) = fib(34) + fib(33)
// fib(34) = fib(33) + fib(32)
// fib(33) = fib(32) + fib(31)
// fib(32) = fib(31) + fib(30)
// fib(31) = fib(30) + fib(29)
// fib(30) = fib(29) + fib(28)
// fib(29) = fib(28) + fib(27)
// fib(28) = fib(27) + fib(26)
// fib(27) = fib(26) + fib(25)
// fib(26) = fib(25) + fib(24)
// fib(25) = fib(24) + fib(23)
// fib(24) = fib(23) + fib(22)
// fib(23) = fib(22) + fib(21)
// fib(22) = fib(21) + fib(

=======


// O(n) time | O(n) space

// const fib = (n) => {
//     const cache = {};
//     return fibHelper(n, cache);
// };

// const fibHelper = (n, cache) => {
//     if (n <= 2) return 1;
//     if (cache[n]) return cache[n];
//     cache[n] = fibHelper(n - 1, cache) + fibHelper(n - 2, cache);
//     return cache[n];
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

=======


// fib(6)
// fib(7)
// fib(8)
// fib(50)

=======


// O(n) time complexity
// O(1) space complexity
