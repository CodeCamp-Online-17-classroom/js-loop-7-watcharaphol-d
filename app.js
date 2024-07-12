function findPrimeNumbers(start, end) {
    function isPrime(n) {
        // Check if n=1 or n=0
        if (n <= 1)
            return false;
        // Check if n=2 or n=3
        if (n == 2 || n == 3)
            return true;
        // Check whether n is divisible by 2 or 3
        if (n % 2 == 0 || n % 3 == 0)
            return false;
        // Check from 5 to square root of n
        // Iterate i by (i+6)
        for (let i = 5; i <= Math.sqrt(n); i = i + 6)
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        return true;
    }

    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(findPrimeNumbers(10, 30));
// Output: [11, 13, 17, 19, 23, 29]

console.log(findPrimeNumbers(1, 10));
// Output: [2, 3, 5, 7]

console.log(findPrimeNumbers(15, 17));
// Output: [17]