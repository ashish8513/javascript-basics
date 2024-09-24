// jo kudh se divisible ho 1,12
function isPrime(num) {
    if (num <= 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true

}
const number = 12;
console.log(`${number} is ${isPrime(number) ? "prime" : "not prime"}`)