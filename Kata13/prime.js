// 10 001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
let primis = true;

function isPrime(primeNum) {
    let sqrtprimeNum = Math.floor(Math.sqrt(primeNum));
    let primis = primeNum != 1;
    let count = 0;

    while (count < primeNum) {
        for (let i = 2; i < sqrtprimeNum + 1; i++) { // sqrtprimeNum+1
            if (primeNum % i == 0) {
                primis = false;
                count++;
            }
        }
    }
    console.log(count);
    console.log(primis);
}

isPrime(10001)