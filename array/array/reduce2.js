const number = [10, 20, 30, 42, 50, 60, 70, 65]

let reduce = number.reduce(function (acc, crr) {
    if(crr>20){
        acc++;
    }
    return acc;
},2)
console.log(reduce)