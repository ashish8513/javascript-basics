//sum of the array elements 

const number = [10, 20, 30, 42, 50, 60, 70, 65]

let reduce = number.reduce(function (acc, crr) {
    return acc + crr;
})
console.log(reduce)