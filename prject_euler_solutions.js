//Answers for the Javascript 101 section of The Odin Project.

/*
1. Multiples of 3 and 5: 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var sum = 0;

for (i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
        console.log(sum);
    }
}

/*
2. Even Fibonacci numbers: 

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var sum = 0, x = 0, y = 1, z = 0;

while(z < 4000000) {
    z = x + y;
    x = y;
    y = z;
        if (z % 2 === 0) {
        sum = sum + z;
    }
}

console.log(sum);

/*
Largest Prime Factor: 

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


function findPrimeFactor(number) {
    var x;
    for(x = 2; x < number; x++) {
        if(number % x === 0) {
            number /= x;
        }
    }
    console.log(x);
}

findPrimeFactor(600851475143);
